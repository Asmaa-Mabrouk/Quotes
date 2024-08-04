let loginForm = document.getElementById("loginForm"); 
let signEmail = document.getElementById("signEmail"); 
let signPassword = document.getElementById("signPassword"); 
let loginAlert = document.getElementById("loginAlert"); 
let loginSuccess = document.getElementById("loginSuccess"); 


let allUsers = []; 

// Load users from localStorage
if (localStorage.getItem("allUsers") != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

console.log(allUsers);

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    login(); 
});

function login() {
    let loginUser = {
        email: signEmail.value,
        password: signPassword.value
    };
    if (isLoginValid(loginUser) == true) {
        console.log("Valid Login");
        loginAlert.classList.replace('d-block', 'd-none'); 
        loginSuccess.classList.replace('d-none', 'd-block'); 
        setTimeout(function(){
            window.location.href="../Home/home.html";
        }, 1000);
    } else {
        console.log("Invalid Login");
        loginSuccess.classList.replace('d-block', 'd-none'); 
        loginAlert.classList.replace('d-none', 'd-block'); 
    }
}
function isLoginValid(loginUser) { 
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].userEmail.toLowerCase() === loginUser.email.toLowerCase() && 
            allUsers[i].userPassword === loginUser.password) {
                localStorage.setItem('userName',allUsers[i].userName);
            return true;
        }
    }
    return false;
}
