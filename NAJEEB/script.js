
let userPassword = prompt("Enter Your Passowrd");

let isNumber = Number(userPassword);

function isnumber(val) {
    for (let i = 0; i < val.length; i++) {
        const element = val[i];
        let isNumber = Number(element);

        if (!Number.isNaN(isNumber)) {
            return true;
        }
        if (['@','#'].includes(element)){

        }
    }
}

if (Number.isNaN(isNumber)) {
    isString(userPassword)
} else {
    isnumber(userPassword);
    console.log("number");
}


// if () {
//     console.log('num');
// } else {
//     console.log('text')

// }

function checkPassword(userPassword) {
    if (userPassword) return "Weak Password";
    else if (userPassword) return "Medium Password";
    else if (userPassword) return "Strong Password";
}

// alert(checkPassword(userPassword));





// function checkType(userPassword) {
//     if (userPassword === number) {
//         alert("Mubarakan Mil GAya Number")
//     }
// }

// checkType(userPassword);



// function name(params) {

// }

let price = +prompt("price")
let quantity = +prompt("price")

function bill(price, quantity) {
    return price * quantity;
}

let result = bill(price, quantity);
alert(result);