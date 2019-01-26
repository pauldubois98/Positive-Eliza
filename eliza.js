var conversation=document.getElementById("conversation");



function write(text){
  var para = document.createElement("P");
  var t = document.createTextNode(text);
  para.appendChild(t);
  document.getElementById("conversation").appendChild(para);
}
function userSay(text){
  write("You:   "+text);
}
function elizaSay(text){
  write("Eliza: "+text);
}

elizaSay("Hello, how are you today?")
