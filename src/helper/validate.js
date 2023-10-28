import toast from 'react-hot-toast'



/** validate register form */
export async function registerValidate(values){
    const errors = firstNameVerify({}, values);
    lastNameVerify(errors, values);
    emailVerify(errors, values);
    professionVerify(errors, values);
    numberVerify(errors,values);
    dobVerify(errors, values);
    countryVerify(errors,values);
    genderVerify(errors,values);
    skillsVerify(errors,values);

    return errors;
}


// /** validate password */
// function passwordVerify(errors = {}, values){
//     /* eslint-disable no-useless-escape */
//     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

//     if(!values.password){
//         errors.password = toast.error("Password Required...!");
//     } else if(values.password.includes(" ")){
//         errors.password = toast.error("Wrong Password...!");
//     }else if(values.password.length < 4){
//         errors.password = toast.error("Password must be more than 4 characters long");
//     }else if(!specialChars.test(values.password)){
//         errors.password = toast.error("Password must have special character");
//     }

//     return errors;
// }


/** validate firstName */
function firstNameVerify(error = {}, values){
    if(!values.firstName){
        error.firstName = toast.error('firstName Required...!');
    }else if(values.firstName.includes(" ")){
        error.firstName = toast.error('Invalid firstName...!')
    }

    return error;
}

/** validate lastName */
function lastNameVerify(error = {}, values){
    if(!values.lastName){
        error.lastName = toast.error('lastName Required...!');
    }else if(values.lastName.includes(" ")){
        error.lastName = toast.error('Invalid lastName...!')
    }

    return error;
}

/** validate profession */
function professionVerify(error = {}, values){
    if(!values.profession){
        error.profession = toast.error('profession Required...!');
    }else if(values.profession.includes(" ")){
        error.profession = toast.error('Invalid profession... dont specify any space!')
    }

    return error;
}


/** validate profession */
function numberVerify(error = {}, values){
    if(!values.number){
        error.number = toast.error('number Required...!');
    }

    return error;
}


/** validate DOB */
function dobVerify(error = {}, values){
    if(!values.DOB){
        error.DOB = toast.error('Date Of Birth is Required...!');
    }

    return error;
}



/** validate gender */
function genderVerify(errors = {}, values) {
    if (!values.gender) {
      errors.gender = toast.error('Gender is required!');
    }
  
    return errors;
}


/** validate country */
function countryVerify(errors = {}, values) {
    if (!values.country) {
      errors.country = toast.error('Country is required!');
    }
  
    return errors;
}



/** validate skills */
function skillsVerify(errors = {}, values) {
    if (values.selectedSkills.length === 0) {
      errors.selectedSkills = toast.error('At least one skill should be selected.');
    }
  
    return errors;
}



/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    // console.log(error);   
    return error;
}