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
/*
function makeElizaAnswer(query){
  for(model in models){
    if(query.search(model[0])){
      console.log('found');
    }
  }

}
*/

function userQuery(){
  if(document.getElementById("userInput").value===""){

  }else{
    userSay(document.getElementById("userInput").value);
    makeElizaAnswer(document.getElementById("userInput").value);
    document.getElementById("userInput").value="";
  }
}
elizaSay("Hello, how are you today?");

function makeElizaAnswer(query){
  var regex;
  var array;
  for(model in models){
    regex = RegExp(model[0], 'i');
    array = regex.exec(query);

    if( array!== null ){
      console.log( array );
    }
    else {
      console.log( "not found" );
    }
  }

}

/*
Typycal model:
['espr', ["possible answer #1", "possible answer #2", ...]]
Example:
['(.*) if (.*)', ["A mathematical joke: is this an IFF statement?", \
"Do you think it's likely that (2) => (1)?"]]
*/

models=[
  ["(.*) if (.*)",
    ["Right, but do you think (2) if (1)", "Do you think it's likely that (2)?"]],
  ["(.*) else (.*)",
    []],

]
