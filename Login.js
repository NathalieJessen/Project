
// login page js.file
function validate(){
   var submit=document.getElementById("submit");
   var username=["HenrikThorn"];
   var password=["Henrik123"];
 
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if ( username=="HenrikThorn" && password=="Henrik123"){
alert ("Login successfully");
window.location.href = "http://transfermarkt.de"; // Redirecting to other page.
       return false;
}
else {
   document.getElementById("loginResult").textContent="Login denied";
}
}
