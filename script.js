// Code goes here

function myFunction() {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = +z - +y;
  var result = ((x / y) *100).toFixed(5);
  document.getElementById("answer").innerHTML = result + "%";
}
