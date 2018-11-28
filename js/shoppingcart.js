
// Converts object into string to push into local storage

class Order{
  constructor(title, price, quantity, day) {
      this.title = title;
      this.price = price;
      this.quantity = quantity;
      this.day = day;

    }
  }
  
// Calculate the total dish price based on quantity which is defined with the ID"num"
  function calc() 
  {
    var price = document.getElementById("dishprice").innerHTML;
    var noDish = document.getElementById("num").value;
    var total = parseInt(price) * noDish
    if (!isNaN(total)) {
      document.getElementById("total").innerHTML = total
      
    }
    
  }


// Define our variable, which comes from the element specified as 'checkout-btn'
  var buttons = document.getElementsByClassName('checkout-btn')

  // Pushes the order into local storage 
  var orders = JSON.parse(localStorage.getItem("orders"));;
  
//If there is no order meaning if the order is null, it should push the two below hardcoded orders to local storage

  if(orders == null ) {
      orders = [];
      orders.push(new Order ("Poké Bowl", "60", "2", "monday"));
      orders.push(new Order ("Poké Bowl", "60", "1", "monday"));
      
      localStorage.setItem("orders", JSON.stringify(orders));
  
//Else it should store the new orders
    } else {
      orders = JSON.parse(localStorage.getItem('orders'));
  }
  console.log(orders);

 // Defines that it should get the above defined elements when the user clicks the checkout button. 
  document.getElementById("checkoutbtn").addEventListener("click", function() {
     orders.push(new Order ("Poké Bowl", "60", document.getElementById("num").value, "monday"));

     localStorage.setItem("orders", JSON.stringify(orders));

});

