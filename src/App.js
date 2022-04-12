import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import { MovieList } from "./MovieList";
import {InitialfilmList} from "./InitialfilmList"
import { Addfilm } from "./Addfilm";
import { Edit } from "./Edit";
import { useParams } from "react-router-dom";




export default function App() { 


  const [ movieList, setmovieList ] = useState(InitialfilmList);  

  
  return (
    <div className="App"> 
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/film">Films</Link>
          
        </li>
      
      </ul>

      
      <Switch>
      <Route exact path="/">  
          Welcome Home!!!!!
        </Route>
      
        


        <Route exact path="/film">
            <Addfilm movieList={movieList} setmovieList={setmovieList} />
            <MovieList movieList={movieList} setmovieList={setmovieList} />
        </Route>

        
        <Route exact path="/film/info/:id">
          hi
        </Route>

        <Route exact path="/film/edit/:id">
          <Edit movieList={movieList} setmovieList={setmovieList} />
        </Route>
        
      



      



        

     
        

        
       
      </Switch>




    </div>
  );
}


