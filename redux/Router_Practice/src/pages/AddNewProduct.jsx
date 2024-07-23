import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

const AddNewProduct = () => {

  // const [product,setProduct] = useState({
  //   title: '',
  //   companyName: '',
  //   price:null,
  //   description:'',
  //   category:'',
  //   // image:'',
  // })

  const {handleChange,handleBlur,handleReset,handleSubmit,touched,values,errors,setFieldValue} = useFormik({
    initialValues: {
      title: '',
      companyName: '',
      price:null,
      description:'',
      category:'',
      // password:'',
      avatar:'',
    },
    validationSchema: yup.object({
      title: yup.string().max(5,'Atleast 5 characters are required').required("Required"),
      companyName: yup.string().max(7,'Atleast 7 characters are required').required("Reqiured"),
      price: yup.number().typeError("Enter only Numeric value").min(3,'Atleast 3 Digits are required').required("Reqiured"),
      avatar:yup.string(),
      description: yup.string(),
      category: yup.string().required("Required"),
      // password: yup.string().matches('^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W{2,})(?!\s).{8,}$','Enter Valid Password'),
    }),
    onSubmit: (v)=>{
      console.log(v);
    }
  })

  // const handleFormData = async (e) => {
  //   e.preventDefault();
  //   console.log(product);
  //  const res = await fetch('https://fakestoreapi.com/products',{
  //     method:'POST',
  //     headers: {'Content-Type':'application/json'},
  //     body:JSON.stringify(product),
  //   })
  //   console.log(res);
  // }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mx-3 my-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          {touched.title && errors.title ? (<div style={{color:'red'}}>{errors.title }</div>) : ("")}
        </div>

        <div className="mx-3 my-3">
          <label htmlFor="companyName" className="form-label">
            Company Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          {touched.companyName && errors.companyName ? (<div style={{color:"red"}}>{errors.companyName}</div>) : ("")}
        </div>

        {/* <div className="mx-3 my-3">
          <label htmlFor="password" className="form-label">
          Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          <div>
          {touched.password && errors.password ? (<div style={{color:"red"}}>{errors.password}</div>) : ("")}
          </div>
          <div style={{backgroundColor:'red',color:'white', display: touched.password && errors.password ? 'block' : 'none'}}>
            <ul>
            <li>should contain at least 1 digit</li>
            <li>should contain at least 2 special characters</li>
            <li>should contain at least 1 alphabetic character</li>
            <li>should not contain any blank space</li>
            </ul>
          </div>
        </div> */}

        <div className="mx-3 my-3">
          <label htmlFor="price" className="form-label">
            Product Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          {touched.price && errors.price ? (<div style={{color:"red"}}>{errors.price}</div>) : ("")}
        </div>

        <div className="mx-3 my-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea type="text" className="form-control" id="description" name="description" onChange={handleChange}
          onBlur={handleBlur}
          />
          {touched.description && errors.description ? (<div style={{color:"red"}}>{errors.description}</div>) : ("")}
        </div>

        <div className="mx-3 my-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <select className="form-select" aria-label="Default select example" name="category" id="category" onChange={handleChange}
          onBlur={handleBlur}
          >
            <option>select category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Children">Children</option>
          </select>
        {touched.category && errors.category ? (<div style={{color:"red"}}>{errors.category}</div>) : ("")}
        </div>

         <div className="input-group mx-3 my-3 w-50">
          <input type="file" className="form-control" id="avatar" name="avatar" onChange={(eve)=>{
            const read = new FileReader();
            read.onloadend = ()=>{
              if(read.readyState === 2){
                console.log("inside ready state");
                setFieldValue('avatar',read.result);
              }
            }
            read.readAsDataURL(eve.currentTarget.files[0])
          }}/>
          <label className="input-group-text" htmlFor="avatar">
            Upload
          </label>
          {touched.avatar && errors.avatar ? (<div style={{color:"red"}}>{errors.avatar}</div>) : ("")}
        </div>

        <div className="mx-3 my-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div> 
      </form>
    </div>
  );
};

export default AddNewProduct;
