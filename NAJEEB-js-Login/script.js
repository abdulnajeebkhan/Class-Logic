let userEmail = "najeebkhan@gmail.com";
let userpass = 123;

let newEmail = prompt("Enter Your Email")
let newPass = prompt("Enter Your Pass");

if (userEmail === newEmail && userpass == newPass) {
    alert("Login Succesfull");
} else {
    alert("Somthing Incorrect");
}