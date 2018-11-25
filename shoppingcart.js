
// Converts object into string to push into local storage

class Order{
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
      /*activeOrder.price = total*/
    }
    
  }
  var buttons = document.getElementsByClassName('checkout-btn')

  var Orders = JSON.parse(localStorage.getItem("Order"));;
  localStorage.setItem("Orders", JSON.stringify(Orders));



/*
  var Order = JSON.parse(localStorage.getItem("Orders"));


  
  if(Orders == null ) {
      orders = [];
      orders.push(new Order ("Poké Bowl", "60", "2", "monday"));
      orders.push(new Order ("Poké Bowl", "60", "1", "monday"));
      
      localStorage.setItem("orders", JSON.stringify(orders));
  

    } else {
      orders = JSON.parse(localStorage.getItem('orders'));
  }



  document.getElementById("checkout").addEventListener("click", function() {
    firstname = document.getElementById("title").value;
    lastname = document.getElementById("price").value;
    address = document.getElementById("quantity").value;
    email = document.getElementById("day").value;

*/


