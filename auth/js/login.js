function login() {
  var allusers = localStorage.getItem("users");
  if (allusers) {
    allusers = JSON.parse(allusers);
  } else {
    allusers = [];
  }

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email && password) {
    var isExists = allusers.find(function (data) {
      return data.email === email && data.password === password;
    });
    if (isExists) {
      alert("Login successful");
      localStorage.setItem("activeUser", JSON.stringify(isExists));
      window.location.href = "./home.html";
    } else {
      alert("Invalid credentials");
    }
  }
}
