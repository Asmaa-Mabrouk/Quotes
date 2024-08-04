let signUpForm = document.getElementById("registerForm"); 
let signName = document.getElementById("signName"); 
let signEmail = document.getElementById("signEmail"); 
let signPassword = document.getElementById("signPassword"); 
let nameAlert = document.getElementById("nameAlert"); 
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert"); 
let existAlert = document.getElementById("existAlert"); 
let successAlert= document.getElementById("successAlert");
let allUsers =[]; 




if (localStorage.getItem('allUsers') != null) {
allUsers = JSON.parse(localStorage.getItem('allUsers')); 
}
signUpForm.addEventListener ('submit',function(e){
    e.preventDefault(); 
    if (checkInputValidity()){
      console.log('Add User'); 
      addUser()
    }
}) 
function addUser(){
    let newUser = {
        userName:signName.value, 
        userEmail:signEmail.value,
        userPassword:signPassword.value,
    }
    if (isAlreadyExist(newUser) == true){
        existAlert.classList.replace('d-none','d-block');
    } else {
        existAlert.classList.replace('d-block','d-none');
        successAlert.classList.replace('d-none','d-block');
        setTimeout(function(){
            window.location.href="../Login/login.html";
        }, 2000);
        allUsers.push (newUser);
        console.log(allUsers); 
        localStorage.setItem('allUsers',JSON.stringify(allUsers))
    }
}

function validateInputData(regex,element,alertElm) { 
    let pattern = regex; 
    if (pattern.test(element.value)) {
        alertElm.classList.replace('d-block','d-none')
        element.classList.remove("is-invalid")
        element.classList.add("is-valid")
        return true
    }else {
        alertElm.classList.replace('d-none','d-block')
        element.classList.add("is-invalid")
        return false
    }
}
function checkInputValidity(){ 
if (validateInputData(/^\w{2,}$/,signName,nameAlert) == true 
&& validateInputData(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,signEmail,emailAlert)== true &&
validateInputData(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,signPassword,passwordAlert)== true)
{
console.log ('Valid inputs')
return true
}else {
    console.log ('something wrong')
    return false 
}}

function isAlreadyExist(newUser){
    for ( var i=0 ; i < allUsers.length; i++) {
        if (allUsers[i].userEmail.toLowerCase() == newUser.userEmail.toLowerCase()){
            return true;
        } else {
        return false
    }
}
}

