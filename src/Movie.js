import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Counter } from "./Counter";


export function Movie({ poster, name, rating, summary, deleteButton, editButton,infoButton}) {
  const history = useHistory();
  const logic = {
    color: rating >= 8 ? "green" : "red", //conditional stylingn
  };
  const [show, setshow] = useState(true);
  

  return (
    
    <div className='film-container'>
      <img src={poster} className="logo" alt='pic' />
      <div className='filmspecs'>
        <h2 className='filmname'>{name}</h2>
        <p style={logic} className='rating'>✨{rating}</p>

      </div>
      <button onClick={() => setshow(!show)}>Hide summary</button>
      {show ? <p className='summary'>{summary}</p> : " "}
      {/* <button onClick={() => history.push(`/film/${id}`)}>info</button> */}

      <Counter /> {deleteButton} {editButton} {infoButton}
    </div>
  );
}

//