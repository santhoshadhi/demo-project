import { useState } from "react";
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "./global";



//how to push the code to git and other cmd
export function Edit() {
  const [movie, setmovie] = useState(null);  
   
    const { id } = useParams();
  //const movies = movie[id];
  //console.log(movies);
 
  useEffect(() => {
    fetch(`${api}/movies/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data => setmovie(data)))
  },[] );
  
    return (  
   
      <div>{movie ? <Editdata movie={movie} /> : <h2>Loading...</h2>}</div>
    
    );
}


function Editdata({ movie }) {
  const [name, setname] = useState(movie.name);
  const [poster, setposter] = useState(movie.poster); 
  const [rating, setrating] = useState(movie.rating);
  const [summary, setsummary] = useState(movie.summary);
  const history = useHistory();

  const addfilm = () => {
    const updatedMovie = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
};
fetch(`${api}/movies/${movie.id}`,
{
method: "PUT",
body: JSON.stringify(updatedMovie),
headers: {
"Content-Type": "application/json"
,
},
  }).then(() => history.push("/movies"));
}

  return (
    <div className='film-form'>

      <input value={name} type="text" placeholder='Name' onChange={(event) => setname(event.target.value)} />
      <input value={poster} type="text" placeholder='Poster' onChange={(event) => setposter(event.target.value)} />
      <input value={rating} type="text" placeholder='Rating' onChange={(event) => setrating(event.target.value)} />
      <input value={summary} type="text" placeholder='Summary' onChange={(event) => setsummary(event.target.value)} />

          
      <Button variant="contained" onClick={() => { addfilm()
      
              
      
              // const copyMovie = [...movie];
              // copyMovie[id] = updatedMovie;
              // setmovie(copyMovie);
              //  history.push(`/film`)
          }}>Update</Button>    
    </div>
  )
}