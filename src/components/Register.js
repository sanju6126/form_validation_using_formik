import React from 'react'
import styles from '../styles/Username.module.css'
// import { Formik } from 'formik'
import { useFormik } from 'formik' 
import toast, { Toaster } from 'react-hot-toast'
import { registerValidate } from '../helper/validate'
// import avatar from '../assets/profile.png'





function Register() {

    const formik = useFormik({
        initialValues: {
          email:'',
          username:'',
          password: '',       
          //this property name has to filled when the input box is filled...that's why below in the div textbox we have used this variable name
        },
    
        validate: registerValidate,
        // these below two statements are rquired to validate the inout box in the form when the submit button is clicked 
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit: async (values,action) => {
        //   values = await Object.assign(values, { profile: '' })
          console.log(values) ;
          toast.success("Form Submitted Successfully")
          action.resetForm()
        
        }
      });

    


  return (
    <div className='container mx-auto' onSubmit={formik.handleSubmit}>

      {/* placing the toast */}
      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}style={{width:"30%"}}>
          
          <div className='title flex flex-col items-center'>
            <h4 className='py-0 text-4xl font-bold'>Register!</h4>
            <span className='py-3 text-xl w-2/3 text-center text-gray-500'>
              Happy to join you!.
            </span>
          </div>

          <form className='py-1'>
            {/* <div className='profile flex justify-center py-1'>
              <label htmlFor='profile'>
                <img src={ avatar} className={styles.profile_img} alt="avatar"/>
              </label>

              <input type="file" id="profile" name='profile'/>
            </div> */}

            <div className='textbox flex flex-col items-center gap-3'>
              <input {...formik.getFieldProps('email')} className={styles.textbox} type='text' placeholder='Email*'/>
              {formik.errors.email && formik.touched.email ? (<p className='text-red-400'>email is required!!</p>) : null}
              <input {...formik.getFieldProps('username')}  className={styles.textbox} type='text' placeholder='Username*'/>
              {formik.errors.username && formik.touched.username ? (<p className='text-red-400'>Username is required!!</p>) : null}
              <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='Password*'/>
              {formik.errors.password && formik.touched.password ? (<p className='text-red-400'>password is required!!</p>) : null}
              <button className={styles.btn} type='submit'>Register</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Register




//  // we can also use yup for the validation purposes...here we have not used any extra library for validation...
// // Formik is just used for Handling form data where as yup is used for validation

// // Here is the way of validation using YUP
// import * as Yup from 'yup';
 
//  const SignupSchema = Yup.object().shape({
//    firstName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    lastName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    email: Yup.string().email('Invalid email').required('Required'),
//  });


// and then instead of "validate: registerValidate," above we just have to use "validationSchema={SignupSchema}"
// {formik.errors.email && formik.touched.email ? (<p className='text-red-400'>{formik.errors.name}</p>) : null}




// // ***************************************************** THAPAS WAY MUSCH SIMILAR TO WHAT I DONE
// import * as Yup from "yup";    //make this as a separate file

// export const signUpSchema = Yup.object({
//   name: Yup.string().min(2).max(25).required("Please enter your name"),
//   email: Yup.string().email().required("Please enter your email"),
//   password: Yup.string().min(6).required("Please enter your password"),
//   confirm_password: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "Password must match"),
// });

// import React from "react";
// import styled from "styled-components";
// import { GlobalStyle } from "./Styles/globalStyles";
// import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

// const Registration = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values, action) => {
//         console.log(
//           "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
//           values
//         );
//         action.resetForm();
//       },
//     });
//   console.log(
//     errors
//   );

//   return (
//     <>
//       
//      
//         <div className="container">
//           <div className="modal">
//             <div className="modal-container">
//               <div className="modal-left">
//                 <h1 className="modal-title">Welcome!</h1>
//                 <p className="modal-desc">
//                   To the thapa technical website for programmers.
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       Name
//                     </label>
//                     <input
//                       type="name"
//                       autoComplete="off"
//                       name="name"
//                       id="name"
//                       placeholder="Name"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="form-error">{errors.name}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="email" className="input-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       autoComplete="off"
//                       name="email"
//                       id="email"
//                       placeholder="Email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.email && touched.email ? (
//                       <p className="form-error">{errors.email}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="password" className="input-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="password"
//                       id="password"
//                       placeholder="Password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.password && touched.password ? (
//                       <p className="form-error">{errors.password}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="confirm_password" className="input-label">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="confirm_password"
//                       id="confirm_password"
//                       placeholder="Confirm Password"
//                       value={values.confirm_password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.confirm_password && touched.confirm_password ? (
//                       <p className="form-error">{errors.confirm_password}</p>
//                     ) : null}
//                   </div>
//                   <div className="modal-buttons">
//                     <a href="#" className="">
//                       Want to register using Gmail?
//                     </a>
//                     <button className="input-button" type="submit">
//                       Registration
//                     </button>
//                   </div>
//                 </form>
//                 <p className="sign-up">
//                   Already have an account? <a href="#">Sign In now</a>
//                 </p>
//               </div>
//               <div className="modal-right">
//                 <img
//                   src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//      
//     </>
//   );
// };



// export default Registration;





