// Js for the buttons on the checkout page 

function validator(){

    if(!validateInput(username, '^[a-zA-Z0-9]{5,10}$')){
        alert('Username must contain min 5 - max 10 characters')
        return false;
    }

    if(!validateInput(age, '[0-9]{2}$')){      
        return false;
    }

    if(!validateInput(email, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid email address')
        return false;
    }

    if(!validateInput(password, '[a-zA-Z0-9]{4,8}$')){
        alert('Password must contain min 4 - 8 max charakters')
        return false;
    }

    return true;

}