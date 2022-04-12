import { useHistory } from "react-router-dom";
import { Movie } from "./Movie";



export function MovieList({movieList,setmovieList}) {
  //
    
  const history = useHistory();
  return (
    <div className='container'>
      {movieList.map(({ poster, name, rating, summary },index ) => (
        <Movie
          //id={index}
          poster={poster}
          name={name}
          rating={rating}
          summary={summary}       
          deleteButton={<button
            onClick={() => {
              const copyMovieList = [...movieList];
              copyMovieList.splice(index, 1)
              setmovieList(copyMovieList);
            }}
          >Delete</button>}
          
          

            editButton=
          {<button
            onClick={() => history.push(`/film/edit/${index}`)}>edit</button>} 
          
          
            infoButton=
            {<button
              onClick={() => history.push(`/film/info/${index}`)}>Info</button>} 
            
          />
          

      ))}



    </div>
  );


}
