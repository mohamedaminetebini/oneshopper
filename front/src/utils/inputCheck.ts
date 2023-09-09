
const checkInput = (value : string) : boolean => {
    if (value.length === 0) {
        return false;
    }

    for(let i = 0; i < value.length; i++) {
        if( !/[a-zA-Z0-9]/.test( value.charAt(i) ) ) {
            return false;
         }
         
        
    }
  
    return true;
}

const checkNumber = (value : string) : boolean => {
    if (value.length === 0) {
        return false;
    }
    for(let i = 0; i < value.length; i++) {
        if( !/[0-9]/.test( value.charAt(i) ) ) {
            return false;
         }
         
        
    }
    return true;
}
const checkExpiryDate = (value : string) : boolean => {
    if(value.indexOf("/") === -1){
        return false;
    }
    value.replace("/", "");
    for(let i = 0; i < value.length; i++) {
        if( !/[0-9]/.test( value.charAt(i) ) ) {
            return false;
         }
         
        
    }
    return true;
}
const checkEmail = (value : string) : boolean => {
    if (value.length === 0) {
        return false;
    }
    if(value.indexOf("@") === -1 || value.indexOf(".") === -1){
        return false;
    }

   
    return true;
}
const checkUsername = (value : string) : boolean => {
    if (value.length === 0) {
        return false;
    }
    for(let i = 0; i < value.length; i++) {
        if( !/[a-zA-Z0-9]/.test( value.charAt(i) ) ) {
            return false;
         }
         
        
    }
    return true;
}
export { checkInput , checkNumber , checkExpiryDate ,checkEmail ,checkUsername}