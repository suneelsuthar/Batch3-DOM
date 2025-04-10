function signup() {
  var users = localStorage.getItem("users");
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (username && email && password) {
    var obj = {
      username: username,
      email: email,
      password: password,
      createdAt: new Date(),
    };

    var isExists = users.find(function (data) {
      return data.email === email;
    });

    if (isExists) {
      alert("User already exists");
    } else {
      users.push(obj);
      localStorage.setItem("users", JSON.stringify(users));
      alert("User created successfully");
      window.location.href = "./login.html";
    }
  }
}
