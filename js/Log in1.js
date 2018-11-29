// User class
class User{
    constructor(firstname, lastname, address, email, username, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}



var users = JSON.parse(localStorage.getItem("users"));

// User array 


if(users == null ){
    users = [];
    users.push(new User ("Mathilde", "Lundgreen", "Sweden", "mathildelundgreen@gmail.com", "mathi", "sunny"));
    users.push(new User ("Nathalie", "Jessen", "Denmark", "nathi@gmail.com", "nathi", "rainy"));
    
    localStorage.setItem("users", JSON.stringify(users));

    

            
} else {
    users = JSON.parse(localStorage.getItem('users'));
}

// getElementById() returns our element with the specified value
document.getElementById("create").addEventListener("click", function() {
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    address = document.getElementById("streetaddress").value;
    email = document.getElementById("email").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;


//If there are empty fields return false + alert
    
    if (firstname == '' || lastname == '' || address == '' || email == '' || username == '' || password == '') {
        
        alert('Please provide the missing personal information')
        return false
    }

    //If filled out correctly return true + alert + redirect

    users.push(new User(firstname, lastname, address, email, username, password)); 
    alert ("Profile successfully created");
        window.location.href = "LoginPage1.html";

    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
    
});



//Local storage capacaty is limited to a string. 

function checkLogin() {
var username=document.getElementById("uname").value;
var password=document.getElementById("pw").value;



for (i=0; i < users.length; i++){


    if ( username==users[i].username && password == users[i].password){
        alert ("Login successful");
        window.location.href = "ProductPageUpdated.html"; // Redirecting to other page.
                
    return true;
    }

}
}

