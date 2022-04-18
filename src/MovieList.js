import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Movie } from "./Movie";
import { useState } from "react";
import { api } from "./global";

export function MovieList() {
  const history = useHistory();
  const [movieList, setmovieList] = useState([]);  
   
  

  const getmovie = () => {
    fetch(`${api}/movies`, {
      method : "GET",
    })
  .then((data) =>data.json())
  .then((data)=>setmovieList(data));
    
  };
 


  useEffect(() => 
    getmovie(), [])
  

  const deletedata = (id) => {
    fetch(`${api}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getmovie());
  };


  
  return (
    <div className='container'>
      {movieList.map(({ poster, name, rating, summary,id },index ) => (
        <Movie
          id={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}       
          deleteButton={<button
            onClick={() => {
              // const copyMovieList = [...movieList];
              // copyMovieList.splice(index, 1)
              // setmovieList(copyMovieList);
              deletedata(id)  
            }}
          >Delete</button>}
         
          

            editButton=
          {<button
            onClick={() => history.push(`/movies/edit/${id}`)}>edit</button>} 
          
          
            infoButton=
            {<button
              onClick={() => history.push(`/movies/info/${index}`)}>Info</button>} 
            
          />
          

      ))}



    </div>
  );


}
