// Converts object into string to push into local storage

class Order {
  constructor(title, price, quantity, day) {
      this.title = title;
      this.price = price;
      this.quantity = quantity;
      this.day = day;

    }
  }
  


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

  var activeOrder = new Order('01')

  var orders = JSON.parse(localStorage.getItem("Order"));

  
 
  if(Order == null ){
     orders = [];
      Order.push(new Order ("Poké Bowl", "120", "2", "Monday"));
      Order.push(new Order ("Pasta Carbonara", "50", "1", "Tuesday"));
      
      localStorage.setItem("Orders", JSON.stringify(activeOrder));
  
      
  
      // Add orders array to localStorage *JSON.stringify()  - this is not necessary (says Marten) but we can do it     
              
  } else {
      Orders = JSON.parse(localStorage.getItem('Orders'));
  }
  
  
  document.getElementById("Checkout").addEventListener("click", function() {
      title = document.getElementById("title").value;
      price = document.getElementById("price").value;
      quantity = document.getElementById("quantity").value;
      day = document.getElementById("day").value;
      
  
      orders.push(new Order(title, price, quantity, day));
  
      console.log(orders);
      localStorage.setItem('orders', JSON.stringify(orders));
  });
  

  
  //local storage capacaty is limited to a string. It has to be a string. 
  /*

  function checkLogin() {
  var username=document.getElementById("uname").value;
  var password=document.getElementById("pw").value;
  
  
  
  
  for (i=0; i < users.length; i++){
      //text += users [i] + "<br>";  probably not relevant
  
      if ( username==users[i].username && password == users[i].password){
          alert ("Login successfully");
          window.location.href = "Product%20page.html"; // Redirecting to other page.
                  //return false;
      return true;
      }
  
  }
  }



*/




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
 