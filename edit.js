var id = new URLSearchParams(window.location.search).get("id");

var data = localStorage.getItem("items");
if (data) {
  data = JSON.parse(data);
}
document.getElementById("title").value = data[id].title;
document.getElementById("description").value = data[id].description;

function updateData() {
  var newtitle = document.getElementById("title").value;
  var newdescription = document.getElementById("description").value;
  if (newtitle && newdescription) {
    console.log(newdescription, newtitle);
    data[id].title = newtitle;
    data[id].description = newdescription;
    localStorage.setItem("items", JSON.stringify(data));
    window.location.href = "index.html";
  }
}
