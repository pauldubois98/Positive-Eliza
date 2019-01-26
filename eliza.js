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

function userQuery(){
  if(document.getElementById("userInput").value===""){

  }else{
    userSay(document.getElementById("userInput").value);
    document.getElementById("userInput").value="";
    makeElizaAnswer();
  }

}

function makeElizaAnswer(){
  
}


elizaSay("Hello, how are you today?")
