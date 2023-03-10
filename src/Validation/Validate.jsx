

export const useValidate = (keys) => {
    let errors = {};
    return (data) => {
        keys.forEach( key => {
            let value = data[key];
            switch(key) {
                case 'Name' : 
                    if(! value) {
                        errors[key] = "First name should not be empty"
                    } else if (! /^[A-Z]/.test(value)) {
                        errors[key] = "Name should starts with upper case";
                    } else {
                        errors[key] = ""
                    }
                    break;
                case 'Email':
                    if(! value) {
                        errors[key] = "Email should not be empty"
                    } else if (! /^[a-z]/.test(value)) {
                        errors[key] = "Name should not have upper case";
                    } else {
                        errors[key] = ""
                    } 
                    break;
                case 'Mobile' :
                    if(! value) {
                        errors[key] = "phone number should not be empty"
                    } else if( ! /^[6-9][0-9]{9}$/.test(value)) {
                        errors[key] = "Invalid phone number";
                    } else {
                        errors[key] = ""
                    }
                default :
                }
            })
        return errors;
    }
}

