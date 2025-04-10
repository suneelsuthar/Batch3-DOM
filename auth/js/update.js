var allusers = localStorage.getItem("users");
if (allusers) {
  allusers = JSON.parse(allusers);
} else {
  allusers = [];
}
var activeUser = localStorage.getItem("activeUser");
if (activeUser) {
  activeUser = JSON.parse(activeUser);
}

document.getElementById("username").value = activeUser?.username;
document.getElementById("number").value = activeUser?.number;
document.getElementById("date").value = activeUser?.dob;
document.getElementById("gender").value = activeUser?.gender;


function updateProfile() {
  var username = document.getElementById("username").value;
  var number = document.getElementById("number").value;
  var date = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;

  if (username && number && date && gender) {
    for (var i = 0; i < allusers.length; i++) {
      if (allusers[i].email === activeUser.email) {
        console.log(allusers[i]);

        allusers[i].number = number;
        allusers[i].dob = date;
        allusers[i].gender = gender;
        allusers[i].username = username;
        localStorage.setItem("users", JSON.stringify(allusers));
        localStorage.setItem("activeUser", JSON.stringify(allusers[i]));
        window.location.href = "./home.html";
      }
    }
  }
}
