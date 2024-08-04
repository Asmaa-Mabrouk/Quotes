let logBtn = document.getElementById("logBtn"); 
if (localStorage.getItem("userName") != null) {
    userName = localStorage.getItem('userName');
}

console.log(userName);
displayName.innerHTML = userName;

logBtn.addEventListener('click', function(){
    localStorage.removeItem('userName'); 
    window.location.href = "../Login/login.html"
})


