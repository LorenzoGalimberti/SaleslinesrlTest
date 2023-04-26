function Validation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email===""){
        error.email="L'email non deve essere vuota"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email non corrisponde"
    }else{
        error.email=""
    }


    if(values.password===""){
        error.password="La Password non deve essere vuota"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password deve contentere almeno un carattere maiuscolo e un numero"
    }else{
        error.password=""
    }
    return error;
}

export default Validation;