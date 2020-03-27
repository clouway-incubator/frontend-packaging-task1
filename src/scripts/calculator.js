let container = document.getElementById('calc');
let inputbar = document.getElementById('inputbar');

const regex = /[^\d*][\D]*[^\d*]/g;

(() => {
    let input = '';
    container.addEventListener('click', e => {
        if (e.target.id == '' && e.target.value != undefined) {
            input += e.target.value;
            inputbar.innerHTML = input;
        }
        else if (!isInputEmpty() && 
                    (e.target.id == 'add' || e.target.id == 'subtract' || 
                    e.target.id == 'multiply' || e.target.id == 'divide')) {
            input += e.target.value;
            let isMatch = input.match(regex);
            if (isMatch != null){
                input = input.replace(regex, isMatch[0].substring(0, 1));
            }
            inputbar.innerHTML = input;
        }
        else if (!isInputEmpty() && e.target.id == 'calculate'){
            let result = 0;
            try {
                result = eval(inputbar.innerHTML);
                input = result;
                inputbar.innerHTML = result;
            }
            catch (error) {
                window.alert(error.message);
            }
        }
        else if (!isInputEmpty() && e.target.id == 'delete'){
            inputbar.innerHTML = inputbar.innerHTML.slice(0, -1);
            input = input.slice(0, -1);
        }
        else if (e.target.id == 'clear'){
            inputbar.innerHTML = '';
            input = '';
        }
    })
})();

function isInputEmpty(){
    if (inputbar.innerHTML != undefined && inputbar.innerHTML != '') {
        return false;
    }
    else {
        return true;
    }
}

