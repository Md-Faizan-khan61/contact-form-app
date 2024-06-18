import React from "react";
import {useFormik} from 'formik'
import * as yup from 'yup'
import Axios from 'axios'

const Form = () => {
const formik = useFormik({
     initialValues:{
         name:'',
         email:'',
         message:''
     },
     validationSchema:yup.object({
       name:yup.string().required('name is required').min(2, 'Name must be at least 2 characters'),
       email:yup.string().email('Invalid Email').required('email is required'),
       message:yup.string().required('message is required').max(500,'message can be at most 500 character')
     }),
     onSubmit:async (values,{resetForm})=>{
      alert('Form submitted successfully'); 
      console.log('form data', values);
      const response = await Axios.post('http://localhost:5000/data',values);
      console.log('data added',response.config.data);
      resetForm()
     }
}) 

    return(
     <form className="form" onSubmit={formik.handleSubmit}>
      <div className="contact-form">
        <div className="child">
        <label>
         Name
        </label>        
        <input
        type="text"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
       {formik.touched.name && formik.errors.name ? (<div style={{color:'coral'}}>{formik.errors.name}</div>):null}
       </div>
       <div className="child"> 
        <label>
         Email
        </label>        
        <input
        type="email"
        name="email"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
       {formik.touched.email && formik.errors.email ? (<div style={{color:'coral'}}>{formik.errors.email}</div>):null}
      </div>
       <div className="child">
        <label>
         Message
        </label>        
        <textarea
        type='text'
        name="message"
        value={formik.values.message}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
        {formik.touched.message && formik.errors.message ? (<div style={{color:'coral'}}>{formik.errors.message}</div>):null}
         </div>
        <button
        type="submit"
        className="button"
        >
            Submit
        </button>
      </div>
     </form>
    )
}

export default Form