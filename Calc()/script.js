var output = document.querySelector(".output");

let lastInputWasOperator = false;

let inp = (value) => {

    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (lastInputWasOperator) {
            return 0;
        }
        lastInputWasOperator = true;
    } else {
        lastInputWasOperator = false;
    }

    output.value += value;
}


let reset = (value) => {
    output.value = ' '
}



let del = () => {
    let newStr = output.value.slice(0, -1);
    output.value = newStr
}



let result = () => {
    try {
        output.value = eval(output.value)
    }
    catch (error) {
        console.log(error)
    }
}


//Operations --

let plusAdded = false;
let add = (value) => {
    if (!plusAdded && output.value.includes('+')) {
        return 0;
    } else if (!output.value) {
        return 0;
    }
    output.value += value;

}

let minusAdded = false;
let sub = (value) => {
    if (!minusAdded && output.value.includes('-')) {
        return 0;
    } else if (!output.value) {
        return 0;
    }
    output.value += value;
}

let mulAdded = false;
let mul = (value) => {
    if (!mulAdded && output.value.includes('*')) {
        return 0;
    } else if (!output.value) {
        return 0;
    }
    output.value += value;
}

let divAdded = false;
let div = (value) => {
    if (!divAdded && output.value.includes('/')) {
        return 0;
    } else if (!output.value) {
        return 0;
    }
    output.value += value;
}

let decimalAdded = false;
let decimalInp = (value) => {
    if (!decimalAdded && output.value.includes('.')) {
        return 0;
    }
    output.value += value;
}

let copy = () => {
    var copyText = output;
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);

    // Alert for the copied text
    //next time
}
