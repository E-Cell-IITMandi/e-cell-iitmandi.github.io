//The following list contains the colors used in the numbering and decoraion in the rows.
//[red, light red], [blue, light blue], [yellow, light yellow], [pink, light pink], [green, light green] colors respectively
var c = [
  ["#fc3a3a", "#eb6363"],
  ["#5562d9", "#959de8"],
  ["#facc00", "#ffe77a"],
  ["#ff96ff", "#ffbdff"],
  ["#55b837", "#73d955"],
];

//Following lists contain the elements with classes about-us-list-item and special-border respectively
var fb = document.getElementsByClassName("about-us-list-item");
var sb = document.getElementsByClassName("special-border");

for (var i = 0; i < fb.length; i++) {
  fb[i].style.borderLeftColor = sb[i].style.color = c[i % c.length][0]; //change the font color and left border color
}