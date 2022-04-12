import { useState } from "react";
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";



//how to push the code to git and other cmd
export function Edit({movieList,setmovieList}) {
   
    const { id } = useParams();
   const movies = movieList[id];
 
   const [name, setname] = useState(movies.name);
   const [poster, setposter] = useState(movies.poster); 
   const [rating, setrating] = useState(movies.rating);
   const [summary, setsummary] = useState(movies.summary);
   const history = useHistory();
 console.log({id});


  return (
   
    
    <div className='film-form'>

      <input value={name} type="text" placeholder='Name' onChange={(event) => setname(event.target.value)} />
      <input value={poster} type="text" placeholder='Poster' onChange={(event) => setposter(event.target.value)} />
      <input value={rating} type="text" placeholder='Rating' onChange={(event) => setrating(event.target.value)} />
      <input value={summary} type="text" placeholder='Summary' onChange={(event) => setsummary(event.target.value)} />

          
      <Button variant="contained" onClick={() => {
      
              const updatedMovie = {
                  name: name,
                  poster: poster,
                  rating: rating,
                  summary: summary,
              };
              const copyMovieList = [...movieList];
              copyMovieList[id] = updatedMovie;
              setmovieList(copyMovieList);
              history.push(`/film`)
          }}>Update</Button>
    </div>
  );
}
