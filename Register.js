// JAVASCRIPT REGISTER

document.getElementById("cancelbtn").addEventListener("click",function(){
    location.replace("Project.html");
});

function register (){

    if(!alert("You have successfully created a profile")) document.location = 'http://stackoverflow.com/';
//storage
var users = JSON.parse(Localstorage.getItem("users"));
    
    if(users == null) (
        users= [
        [firstname: "Henrik", lastname: "Thorn"]
        [firstname: "Peter", lastname: "Pan"]
    ];
    }
    
 //New user comes
    var userString = Json.stringIfy(users);
    
    localstorage.setItem(“users”, userString);  
    


//alert
}
document.getElementById("signupbtn").addEventListener("click",function(){
location.replace("Project.html");
});







//Existing Users signing in:
document.getElementById("signIn").addEventListener("click", function (){ // This negates the "required" function in HTML! 
var registerEmail = document.getElementById('registerEmail').value;        

var form = document.getElementById('signInForm'); // Gave the form this id!     

for(var i=0; i < form.elements.length; i++){
    if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
        alert('There are some required fields!');
        return false;
    }
} 
<div class="login-page"></br>
    <div class="form">
        <form class="signIn-form" id="signInForm">
        <input type="text" placeholder="E-mail" name="E-mail" id="E-mail" required = "true">
        <br>
        <input type="password" placeholder="Password" name="password" id="password" required = "true">
        <br>
        <br>