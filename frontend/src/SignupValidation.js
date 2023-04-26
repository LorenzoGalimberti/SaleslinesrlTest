function Validation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    
    if(values.name===""){
        error.name="Il nome non deve essere vuota"
    }
    else{
        error.name=""
    }
    if(values.surname===""){
        error.name="Il cognome non deve essere vuota"
    }
    else{
        error.name=""
    }
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
        error.password="Password non corrisponde"
    }else{
        error.password=""
    }
    return error;
}

export default Validation;