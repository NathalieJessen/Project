
document.getElementById("create").addEventListener("click", function (){   
    

    var users = localStorage.getItem("users");

    
    var form = document.getElementById("register-form");   
    
    
    // For loop to check if user has entered input in all fields
    for(var i=0; i < form.elements.length - 1; i++){

        if(form.elements[i].value === ''){
            alert('There are some required fields!');
            return false;
        }
    }
//important for local storage = setItem (setting a value and saving them in local storage) and the other getItem (retrieving the stored items)

    var newUser = new User(firstname.value, lastname.value, streetaddress.value, email.value, username.value, password.value)
    users.push(newUser);

    // Use setItem to save our JSON.objet in localStorage
    localStorage.setItem("users", JSON.stringify(users))

    alert ("Profile successfully created"); 
window.location.href = "LoginPage1.html"; // Redirecting to other page.
        return false;
    

});

// Here we are retrieving the data

let retrievFromLocalStorage = localStorage.getItem('Users')
retrievFromLocalStorage = JSON.parse(retrievFromLocalStorage)


console.log(retrievFromLocalStorage)

