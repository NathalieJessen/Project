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

function checkInput(userInput, regExp) {
    var regex = new RegExp(regExp) 
    
    console.log(userInput)
    console.log(regex);

    console.log(regex.test(userInput))
    if(regex.test(userInput)){
        return true
    } else {
        return false
    }   
}

function validator(){

    if(!checkInput(fname, '^[a-zA-Z\\s]{0,20}$')){
        alert('Full name is required')
        return false;
    }

    if(!checkInput(email, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid email address')
        return false;

    }

    if(!checkInput(adr, '^[a-zA-Z\\s]{0,20}$')){
        alert('You have entered an invalid address')
        return false;
    }

    if(!checkInput(city, '^[a-zA-Z\\s]{0,20}$')){
            alert('City is required')
            return false;
    }

    if(!checkInput(zip, "^[0-9]{4}$" )){
        alert('Zip is required')
        return false;
    }

    if(!checkInput(cname, '^[a-zA-Z\\s]{0,20}$')){
    
        return false;
    }

    if(!checkInput(ccnum, "^[0-9\\s]{16}$" )){      
        alert('Credit Card not valid')
        return false;
    }

    if(!checkInput(expmonth, "^[0-9]{2}$" )){
        alert('You have entered an invalid email address')
        return false;
    }

    if(!checkInput(expyear, "^[0-9]{4}$" )){
        alert('You have entered an invalid email address')
        return false;
    }

    console.log(cvv)
    if(!checkInput(cvv, "^[0-9]{3}$" )){
        alert('Enter a valid Card Verification Value')
        return false;
    }

    return true;

}

                              /* DOM MANIPULATION */
/****************************************************************************************/

document.getElementById("confirm").addEventListener("click", function(event) {
    event.preventDefault()
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

        
            CreditCard.push(new CreditCard (cname,ccnum, '15.11.2022'))

            localStorage.setItem('CreditCard',JSON.stringify(CreditCard));

      
// 1. Identify current user
            for (i=0; i < users.length; i++) {
                if(users[i].userid == localStorage.getItem('loggedInUser')){
                var activeUser = users[i]
                }
            }

            var orderTitles = []
            for (i=0; i < activeUser.shoppingCart.length; i++) {
                orderTitles.push(activeUser.shoppingCart[i].title)


            }

            orders.push(new Order ('001', activeUser.userid, Date.now(), orderTitles, 400))
            localStorage.setItem('orders', JSON.stringify(orders));

            activeUser.shoppingCart = []

            localStorage.setItem('users',JSON.stringify(users));
            // 3. empty shopping cart when order is created
           
              window.open("orderconfirmed.html");

            }


    else {
        console.log("Does not work");
        return false;
    }
});