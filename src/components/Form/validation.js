const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

const validate = (userData, errors, setErrors) => {  
    if (!userData.username) setErrors({...errors, username: "Email vacío" });
    else {
        if (!regexEmail.test(userData.username)){
        setErrors({...errors, username: "Email inválido" });

        } else if (userData.username.length > 35) {
        setErrors({...errors, username: "No puede superar los 35 caracteres"})
        } else{
        setErrors({...errors, username: ''});
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