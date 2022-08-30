var inputBox= document.getElementById("display");

function Userinput(input){
    var oldval= inputBox.value;
    var newinput = oldval+""+input;
   inputBox.value=newinput;

}
function ClearAll(){
    inputBox.value="";
}
function Calculateval(){
    var input=inputBox.value;
    input = input.replace('"', "").replace("'", "");
    var result=eval(input);
    inputBox.value=result;
}