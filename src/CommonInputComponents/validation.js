
export function genericValidator(type,inputValue){
    const validateMethod = validatorFunction(type);
    return validateMethod(inputValue);
}

function validatorFunction(type){
    const func = {
        name:isNameValid,
        phone:isNumberValid
    }
    return func[type];
}

 function isNameValid(name){
    const re = /^\w{10}$/i;
    return re.test(name);
}

function isNumberValid(number){
    const re = /^\d{10}$/;
    return re.test(number);
}