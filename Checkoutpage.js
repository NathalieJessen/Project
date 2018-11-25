// function validate()
class CreditCard{
    constructor(fname, email, adr, city, zip, cname, ccnum, expmonth, expyear, cvv){
        this.fname = fname;
        this.email = email;
        this.adr = adr;
        this.city = city;
        this.zip = zip;
        this.cname = cname;
        this.ccnum = ccnum;
        this.expmonth = expmonth;
        this.expyear = expyear;
        this.cvv = cvv;
    }
}

// Checkout details Validation 

function validateInput(userInput, regExp) {
    var regex = new RegExp(regExp);
    
    console.log(regex);

    if(regex.test(userInput)){
        return true
    } else {
        return false
    }   
}

function validator(){

    if(!validateInput(fname, '^[a-zA-Z0-9]{5,10}$')){
        alert('Full name is required')
        return false;
    }

    if(!validateInput(email, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid email address')
        return false;
    }

    if(!validateInput(adr, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid address')
        return false;
    }

        if(!validateInput(city, '^[a-zA-Z0-9]{5,10}$')){
            alert('City is required')
            return false;
        }

    if(!validateInput(zip, '[a-zA-Z0-9]{4,8}$')){
        alert('Zip is required')
        return false;
    }

    if(!validateInput(cname, '^[a-zA-Z0-9]{5,10}$')){
        alert('Full name is required')
        return false;
    }

    if(!validateInput(ccnum, '[a-zA-Z0-9]{4,8}$')){
        alert('Credit card number is required')
        return false;
    }

    if(!validateInput(expmonth, '[a-zA-Z0-9]{4,8}$')){
        alert('Zip is required')
        return false;
    }

    if(!validateInput(expyear, '[a-zA-Z0-9]{4,8}$')){
        alert('Expiration year is required')
        return false;
    }

    if(!validateInput(cvv, '[a-zA-Z0-9]{4,8}$')){
        alert('CVV is required')
        return false;
    }

    return true;

}

document.getElementById("confirm").addEventListener("click", function() {

    fname = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    adr = document.getElementById("adr").value;
    city = document.getElementById("city").value;
    zip = document.getElementById("zip").value;
    cname = document.getElementById("cname").value;
    ccnum = document.getElementById("ccnum").value;
    expmonth = document.getElementById("expmonth").value;
    expyear = document.getElementById("expyear").value;
    cvv = document.getElementById("cvv").value;
    
    
    if(validator()){

        console.log("VALIDATION RETURNS TRUE");
            event.preventDefault()
            alert ("Order successfully placed")
              window.open("orderconfirmed.html");
            })

         } else {
        console.log("Does not work");
        return;
    }

