function selectMode(mode) {
 
 var color = "ghostWhite";
 var image = "/img/light-icon.png";
 var label = "Light Mode";
 
 if (mode === "dark") {
  color = "darkSlateBlue";
  image = "https://v33in6.mimo.run/img/dark-icon.png";
  label = "Dark Mode";
  
 } else if (mode === "light") {
  color = "ghostWhite";
  image = "https://v33in6.mimo.run/img/light-icon.png";
  label = "Light Mode";
  
 } else {
  color = "dimGray";
  image = "https://v33in6.mimo.run/img/ninja-icon.png";
  label = "Ninja Mode";
 }
 
 console.log(label);
 
 
 document.getElementById("icon").src =
  image;
 document.getElementById("theme").style
  .backgroundColor = color;
 document.getElementById("label")
  .innerHTML = label;
 
}