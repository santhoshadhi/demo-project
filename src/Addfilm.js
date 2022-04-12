import { useState } from "react";
import Button from '@mui/material/Button';

export function Addfilm({ movieList, setmovieList }) {
  const [name, setname] = useState('');
  const [poster, setposter] = useState('');
  const [rating, setrating] = useState('');
  const [summary, setsummary] = useState('');


  return (
    <div className='film-form'>

      <input type="text" placeholder='Name' onChange={(event) => setname(event.target.value)} />
      <input type="text" placeholder='Poster' onChange={(event) => setposter(event.target.value)} />
      <input type="text" placeholder='Rating' onChange={(event) => setrating(event.target.value)} />
      <input type="text" placeholder='Summary' onChange={(event) => setsummary(event.target.value)} />


      <Button variant="contained" onClick={() => {
        const newMovieList = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary
        };

        setmovieList([...movieList, newMovieList]);
      }}>Add</Button>
    </div>
  );
}
