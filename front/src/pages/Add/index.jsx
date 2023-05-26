import React, { useState } from 'react'
import {Helmet} from "react-helmet";
import { sportSchema } from '../../validation/SportsSchema';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postSports } from '../../api/requests';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const index = () => {
    const navigate = useNavigate();
    const[sports,setSports] = useState([]);
    function handleSubmit(values, actions) {
        postSports(values)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
        setSports([...sports, values]);
        actions.resetForm();
      }
    const formik = useFormik({
        initialValues: {
          title: "",
          description: "",
          imageUrl: "",
        },
        validationSchema: sportSchema,
        onSubmit: handleSubmit,
    });
  return (
   <>
   <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    </div>
     <div>
     <form  onSubmit={formik.handleSubmit} style={{marginTop:"30px",flexDirection:"column",display:"flex",width:"40%",margin:"30px auto"}}>
     <TextField error = {formik.errors.title && formik.touched.title ? true :false} onChange={formik.handleChange} onBlur = {formik.handleBlur} name = "title" type = "text" id="outlined-basic" label="Title" variant="outlined" />
      {formik.errors.description && formik.touched.description && <p style={{color:"red"}}>{formik.errors.desc}</p>}
      <TextField error = {formik.errors.description && formik.touched.description ? true :false} onChange={formik.handleChange} onBlur = {formik.handleBlur} name = "description" type = "text" id="outlined-basic" label="Description" variant="outlined" />
      {formik.errors.description && formik.touched.description && <p style={{color:"red"}}>{formik.errors.desc}</p>}
      <TextField error = {formik.errors.imageUrl && formik.touched.imageUrl ? true :false} onChange={formik.handleChange} onBlur = {formik.handleBlur} name = "imageUrl" type = "text" id="outlined-basic" label="imageURL" variant="outlined" />
      {formik.errors.imageUrl && formik.touched.imageUrl && <p style={{color:"red"}}>{formik.errors.imageUrl}</p>}
      <Button type="submit" variant="contained">Add</Button>
      </form>
     </div>
   </>
  )
}

export default index