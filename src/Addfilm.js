//import { useState } from "react";
import Button from '@mui/material/Button';
import { api } from "./global";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  

const filmValidationSchema = yup.object({
  name: yup
    .string()
    .required("please enter name"),
  
  poster: yup
    .string()
    .required("please Provide the link"),
  
  rating: yup
    .number()
    .min(0)
    .max(10)
    .required("please Provide the rating"),
  summary: yup
    .string()
    .required("please enter the summary")
    .min(5, "Minimum 5 character"),
  
});


export function Addfilm() {
  // const [name, setname] = useState('');
  // const [poster, setposter] = useState('');
  // const [rating, setrating] = useState('');
  // const [summary, setsummary] = useState('');


  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
    },
    validationSchema:filmValidationSchema ,
    onSubmit: (values) => {
      
      addfilm(values);
    }
  });



  const addfilm = (values) => {
    // const newMovieList = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary
    // };
    console.log("onSubmit",values);
    fetch(`${api}/movies`,
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json", },
      }).then(() => history.push("/movies"));
  };

  return (  
    <form onSubmit={formik.handleSubmit} className='film-form'>

      <TextField label="Name" variant="outlined"
      type="text"
      id="name"
      name="name"
      value={formik.values.name}
      onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.name&&formik.errors.name}
        helperText={formik.touched.name&&formik.errors.name?formik.errors.name:""}
    />


      <TextField label="Poster" variant="outlined"
      type="text"
      id="poster" 
      name="poster"
      value={formik.values.poster}
      onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.poster&&formik.errors.poster}
        helperText={formik.touched.poster&&formik.errors.poster?formik.errors.poster:""}
    />


      <TextField label="Rating" variant="outlined"
      type="text"
      id="rating"
      name="rating"
      value={formik.values.rating}
      onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.rating&&formik.errors.rating}
        helperText={formik.touched.rating&&formik.errors.rating?formik.errors.rating:""}
    />


      <TextField label="Summary" variant="outlined"
      type="text"
      id="summary"
      name="summary"
      value={formik.values.summary}
      onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.summary&&formik.errors.summary}
        helperText={formik.touched.summary&&formik.errors.summary?formik.errors.summary:""}
    />


    <Button variant="contained" type="submit" >
      Submit
    </Button>
    
  </form  >
  );
}




//setmovieList([...movieList, newMovieList]);

