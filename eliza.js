function write(text){
  document.getElementById("conversation").innerHTML+="<p>"+text+"</p>";
  /*
  var para = document.createElement("P");
  var t = document.createTextNode("");
  t.innerHTML=text;
  para.appendChild(t);
  document.getElementById("conversation").appendChild(para);
  */
}
function userSay(text){
  write("<strong>You:</strong> <span class='space'></span>"+text);
}
function elizaSay(text){
  write("<strong>Eliza:</strong> "+text);
}


function userQuery(){
  if(document.getElementById("userInput").value===""){

  }else{
    userSay(document.getElementById("userInput").value);
    elizaSay( makeElizaAnswer(document.getElementById("userInput").value) );
    document.getElementById("userInput").value="";
  }
}
elizaSay("Hello, how are you today?");

function makeElizaAnswer(query){
  var regex;
  var array;
  for(var i = 0; i<models.length; i++){
    regex = RegExp(models[i][0], 'i');

    if( regex.test(query) ){
      array = regex.exec(query);
      console.log( array );
      var output=models[i][1][Math.floor(Math.random() * models[i][1].length)];
      for(var j = 1; j<array.length; j++){
        output=output.replace("("+j+")", array[j])
      }
      return output;
    }
    else {
      console.log( "not found" );
    }
  }
  return 'defult';

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
