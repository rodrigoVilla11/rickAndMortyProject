const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export const validate = (userData, errors, setErrors) => {  

  if (!userData.username) setErrors({...errors, username: "Email vacío" });
    else{
        if (!regexEmail.test(userData.username)){
            setErrors({...errors, username: "Email inválido" });
        }else{
            setErrors({...errors, username: "" });
        }
    }
    
    if (!userData.password) setErrors({...errors, password: "Password vacío" });
    else{
        if (!regexPassword.test(userData.password)){
            setErrors({...errors, password: "Password inválido" });
        }else{
            setErrors({...errors, password: "" });
        }
    }
}

export default validate;