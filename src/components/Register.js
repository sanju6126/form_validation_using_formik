import {React,useState} from 'react'
import styles from '../styles/Username.module.css'
import { useFormik } from 'formik' 
import toast, { Toaster } from 'react-hot-toast'
import { registerValidate } from '../helper/validate'
import { countries } from '../helper/countries'
import CustomAlert from '../helper/CustomAlert'


function Register() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML', 'SQL'];

    const formik = useFormik({
        initialValues: {
          firstName:'',
          lastName:'',
          profession:'',
          number:'',
          email: '',   
          DOB:'',   
          country:'', 
          gender:'',
          selectedSkills: [],
        },
    
        validate: registerValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit: async (values,action) => {
          console.log(values) ;
          alert(JSON.stringify(values, null, 2));

          toast.success("Form Submitted Successfully")
          action.resetForm()
        
        }
      });

    


  return (
    <div className='container mx-auto ' onSubmit={formik.handleSubmit}>

      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex justify-center items-center h-screen '>
        <div className={styles.glass}style={{width:"80%"}}>
          
          <div className='title flex flex-col items-center mb-10 text-4xl'>
            <h4 className='py-0 text-4xl font-bold'>Register!</h4>
            <span className='py-3 text-xl w-2/3 text-center text-gray-500'>
              Happy to join you!.
            </span>
          </div>

          <form className='py-1'>

            <div className='textbox flex flex-col items-center gap-3'>

              <div className='flex justify-between w-full mb-10'>
                <input {...formik.getFieldProps('firstName')}  className={styles.textbox} type='text' placeholder='FirstName*'/>
                {formik.errors.firstName && formik.touched.firstName ? (<p className='text-red-400'>firstName is required!!</p>) : null}
                <input {...formik.getFieldProps('lastName')} className={styles.textbox} type='text' placeholder='LastName*'/>
                {formik.errors.lastName && formik.touched.lastName ? (<p className='text-red-400'>lastName is required!!</p>) : null}

              </div>
              
              
              <div className='flex justify-between w-full mb-10'>
                <input {...formik.getFieldProps('email')} className={styles.textbox} type='text' placeholder='Email*'/>
                {formik.errors.email && formik.touched.email ? (<p className='text-red-400'>email is required!!</p>) : null}
                <input {...formik.getFieldProps('profession')}  className={styles.textbox} type='text' placeholder='Profession*'/>
                {formik.errors.profession && formik.touched.profession ? (<p className='text-red-400'>profession is required!!</p>) : null}
              </div>

              <div className='flex justify-between w-full mb-10'>
                <input {...formik.getFieldProps('number')} className={styles.textbox} type='number' placeholder='Phone Number*'/>
                {formik.errors.number && formik.touched.number ? (<p className='text-red-400'>number is required!!</p>) : null}
                <input {...formik.getFieldProps('DOB')} className={styles.textbox} type='date' placeholder='Date Of Birth*'/>
                {formik.errors.DOB && formik.touched.DOB ? (<p className='text-red-400'>DOB is required!!</p>) : null}
              </div>


              <div className='flex w-full justify-around text-2xl mb-10'>
                  <div>
                    <div className="radio-options flex ml-5 gap-5 ">
                      <label>
                        <input className='scale-150 mr-4' type="radio" name="gender" value="male" onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.gender === "male"} />
                        Male
                      </label>
                      <label>
                        <input className='scale-150 mr-4' type="radio" name="gender" value="female" onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.gender === "female"} />
                        Female
                      </label>
                    </div>
                  </div>

                  <div>
                    <select {...formik.getFieldProps('country')}>
                      <option value='' disabled>
                        Select a Country*
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              <div className='text-2xl'>
                {skills.map(skill => (
                  <div key={skill}>
                    <input
                      className='scale-150 mr-5'
                      type="checkbox"
                      id={skill}
                      name="selectedSkills"
                      value={skill}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.selectedSkills.includes(skill)}
                    />
                    <label htmlFor={skill}>{skill}</label>
                  </div>
                ))}
              </div>



              <div className='flex justify-between gap-5'>
                <button className={styles.btn} type='submit'>Register</button>
                <button className={styles.btn} onClick={() => {formik.resetForm()}} type='reset'>Reset</button>
              </div>
            </div>

          </form>

        </div>
        
      </div>      
    </div>
  )
}

export default Register



