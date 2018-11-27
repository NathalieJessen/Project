
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
      
    }
    
  }
  var buttons = document.getElementsByClassName('checkout-btn')

  var orders = JSON.parse(localStorage.getItem("orders"));;
  
  if(orders == null ) {
      orders = [];
      orders.push(new Order ("Poké Bowl", "60", "2", "monday"));
      orders.push(new Order ("Poké Bowl", "60", "1", "monday"));
      
      localStorage.setItem("orders", JSON.stringify(orders));
  

    } else {
      orders = JSON.parse(localStorage.getItem('orders'));
  }
  console.log(orders);


  document.getElementById("checkoutbtn").addEventListener("click", function() {
     orders.push(new Order ("Poké Bowl", "60", document.getElementById("num").value, "monday"));

     localStorage.setItem("orders", JSON.stringify(orders));

});


