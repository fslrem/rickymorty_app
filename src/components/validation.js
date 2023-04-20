const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = "Ingresa un email válido."
    }
    if(!userData.email){
        errors.email = "Debes ingresar un email."
    }
    if(userData.email.length > 35) {
        errors.email = "Debe tener menos de 35 cáracteres."
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "Tu contraseña debe tener al menos un número."
    }
    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Tu contraseña debe tener de 6 a 10 cáracteres."
    }
    
    return errors;
}

export default validation;