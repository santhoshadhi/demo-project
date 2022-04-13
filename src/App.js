import { createContext, useContext, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import { MovieList } from "./MovieList";
import {InitialfilmList} from "./InitialfilmList"
import { Addfilm } from "./Addfilm";
import { Edit } from "./Edit";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router-dom";


//import { useParams } from "react-router-dom";




export default function App() { 

 
  const [movieList, setmovieList] = useState(InitialfilmList);  
  const history = useHistory();
  
  
  return (

          
    <div className="App"> 
      
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/film">Films</Link>
          
        </li>
      
      </ul> */}


      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button  color="inherit" onClick={() => history.push("/film")}>Films</Button>
        </Toolbar>
      </AppBar>

      
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






// const context = createContext(null); 
// const [mode,setmode]=useState("light")
//       const styles = {
//         backround :mode==="light"?"black":"white"
//       };
// const Info=()=>  {
 
    
//   return (
   
//     <context.Provider value={[mode,setmode]}>
//       <div style={styles} className="black-container">
//           <List />
//         </div>
//     </context.Provider>
//   )
// }

// const List=()=> {
//   <ul>
//     <ListItem value="Light"/>
//     <ListItem value="Dark"/>
//   </ul>
// }


// const ListItem=({value})=> {
//   <ul>
//     <Button value={value}/>
//   </ul>
// }

// const Button=({ value })=> {
//   const [mode, setmode] = useContext(context);
//   const styles = {
//     backround: !(mode === "light") ? "black" : "white",
//     color: mode === "light" ? "black" : "white"
//   };

//   return (
//     <button style={styles}
//       onClick={() => setmode(value === "Light" ? "light" : "dark")}>{value}</button>
//   )
// }