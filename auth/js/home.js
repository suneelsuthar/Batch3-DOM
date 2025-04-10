var activeUser = localStorage.getItem("activeUser");
if (activeUser) {
  activeUser = JSON.parse(activeUser);
}

document.getElementById("username").innerText = activeUser?.username;


function logout(){
    localStorage.removeItem("activeUser");
    window.location.href = "./login.html";
}

function updateProfile(){
    window.location.href="./update.html"
}