export function isInputEmpty(){
    if (inputbar.innerHTML != undefined && inputbar.innerHTML != '') {
        return false;
    }
    else {
        return true;
    }
}

export function setErrorMsg(msg, input){
    var errorMsg = document.getElementById(input);
    errorMsg.innerHTML = msg;
}


export function isNumber(number) {
    const regex = /^(-?\d{1,10}[.|,]\d{1,5}|-?\d{1,10})$/
    return regex.test(number);
}