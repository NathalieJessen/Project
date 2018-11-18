//function validate()
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

// User = array 

    users = [];
    if(users == null ){
        users.push(new User ("Mathilde", "Lundgreen", "Sweden", "mathildelundgreen@gmail.com", "mathi", "sunny"));
        users.push(new User ("Nathalie", "Jessen", "Denmark", "nathi@gmail.com", "nathi", "rainy"));
        
        localStorage.setItem("users", JSON.stringify(users));

        

        // Add users Array to localStorage *JSON.stringify()  - this is not necessary (says Marten) but we can do it     
                
    } else {
        users = JSON.parse(localStorage.getItem('users'));
    }


    document.getElementById("create").addEventListener("click", function() {
        firstname = document.getElementById("firstname").value;
        lastname = document.getElementById("lastname").value;
        address = document.getElementById("streetaddress").value;
        email = document.getElementById("email").value;
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;
    
    
        users.push(new User(firstname, lastname, address, email, username, password));

        console.log(users);
        localStorage.setItem('users', JSON.stringify(users));
    });


//local storage capacaty is limited to a string. It has to be a string. 

function checkLogin() {
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pw").value;
    
   


    for (i=0; i < users.length; i++){
        //text += users [i] + "<br>";  probably relevant

        if ( username==users[i].username && password == users[i].password){
            alert ("Login successfully");
            window.location.href = "Product%20page.html"; // Redirecting to other page.
                    //return false;
        return true;
        }

    }
}
  


// Remeber to make alert on 'login denied'

//else {
 //   document.getElementById("loginResult").textContent="Login denied"
