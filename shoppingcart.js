
class Order{
  constructor(ordernumber, quantity, price, username){
      this.ordernumber = ordernumber;
      this.quantity = quantity;
      this.price = price;
      this.username = username;
  }
}

var activeOrder = new Order('124712')


  function calc() 
  {
    var price = document.getElementById("dishprice").innerHTML;
    var noDish = document.getElementById("num").value;
    var total = parseFloat(price) * noDish
    if (!isNaN(total)) {
      document.getElementById("total").innerHTML = total
      activeOrder.price = total
    }
      

  }


  var orders = JSON.parse(localStorage.getItem("Order"));

  
  //Order = [];
  if(Order == null ){
      Order.push(new Orer ("01", "3", "240", "mathi"));
      Order.push(new Order ("02", "2", "160", "nathi"));
      
      localStorage.setItem("Orders", JSON.stringify(activeOrder));
  
      
  
      // Add users Array to localStorage *JSON.stringify()  - this is not necessary (says Marten) but we can do it     
              
  } else {
      Orders = JSON.parse(localStorage.getItem('Orders'));
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








  /*
function increaseValue1() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue1() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

  function increaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
  }
  
  function decreaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number2').value = value;
  } */
 