// function validate()
class CreditCard{
    constructor(cname, ccnum, expmonth, expyear, cvv){
        this.cname = cname;
        this.ccnum = ccnum;
        this.expmonth = expmonth;
        this.expyear = expyear;
        this.cvv = cvv;
    }
}

// Checkout details Validation 

function validateInput(userInput, regExp) {
    var regex = new RegExp(regExp) 
    
    console.log(regex);

    if(regex.test(userInput)){
        return true
    } else {
        return false
    }   
}

function validator(){

    if(!checkInput(fname, '^[a-zA-Z0-9]{5,10}$')){
        alert('Full name is required')
        return false;
    }

    if(!checkInput(email, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid email address')
        return false;
    }

    if(!checkInput(adr, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid address')
        return false;
    }
        if(!validateInput(country, '^[a-zA-Z0-9]{5,10}$')){
            alert('Country is required')
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
    email = document.getElementById("cname").value;
    cname = document.getElementById("ccnum").value;
    ccnum = document.getElementById("cvv").value;

    if(validator()){

        console.log("VALIDATION RETURNS TRUE");
            event.preventDefault()
            alert ("Order successfully placed")
              window.open("orderconfirmed.html");
            });

    else {
        console.log("Does not work");
        return;
    }