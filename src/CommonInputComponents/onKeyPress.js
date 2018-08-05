export function onKeyPressHandler(type){
    return onKeyPressFunction(type);
}

function onKeyPressFunction(type){
    const func = {
        name:onKeyPressForName,
        phone:onKeyPressForPhone
    }
    return func[type];
}

function onKeyPressForName(event){
    if((event.keyCode >=48 && event.keyCode<=57) || (event.keyCode>=96 && event.keyCode<=105)){
        event.preventDefault();
    }
}
function onKeyPressForPhone(event){
    if((event.keyCode >=65 && event.keyCode<=90)){
        event.preventDefault();
    }
}