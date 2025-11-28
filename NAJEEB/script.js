
let userPassword = prompt("Enter Your Passowrd");

let isNumber = Number(userPassword);

if (Number.isNaN(isNumber)) {
    console.log('text');
} else {
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

function number(val) {
    for (let i = 0; i < val.length; i++) {
        const element = val[i];
        console.log(element);

    }
}


// number(userPassword);


// function checkType(userPassword) {
//     if (userPassword === number) {
//         alert("Mubarakan Mil GAya Number")
//     }
// }

// checkType(userPassword);



function name(params) {

}