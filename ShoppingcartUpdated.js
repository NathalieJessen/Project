
// Converts object into string to push into local storage

class Order {
    constructor(title, price, quantity, image, day) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.day = day;
  
      }
    }
    
  
  
    function calc() 
    {
      var price = document.getElementById("price").innerHTML;
      var noDish = document.getElementById("num").value;
      var total = parseFloat(price) * noDish
      if (!isNaN(total)) {
        document.getElementById("total").innerHTML = total
        activeOrder.price = total
      }
      
    }
      createHTML() {
        return "<h1>" + this.title + "</h1>" + 
        "<span>DKK" + this.price + "</span>" + 
        "<p>" + this.quantity + "</p>" + 
        "<class='shopItem'><img width='400px' src=" + this.image + ">" +
        "<p>" + this.day + 
        "s dish </p>"

    } 
  
  
   
      
   

var monday = new Order('Poke Bowl ', "60.00", 'https://yupitsvegan.com/wp-content/uploads/2015/02/teriyaki_cauliflower_rice_bowls_vegan.jpg', 'monday');
var tuesday = new Order('Pasta Carbonara', "50.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbnrc6SRV5yX23Dc7D34QVVR9U17UKsJnjYj3F0M8LQGPFLbWrw', 'tuesday');
var wednesday = new Order('Cesear Salad', "50.00", 'https://img.taste.com.au/sxVivf6r/taste/2010/01/the-best-spaghetti-carbonara-118943-2.jpg', 'wednesday');
var thursday = new Order('Hamburger', "70.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1yDHNIocg8rvReOUdXZLb11J7QY-o4zydtaD5Z383kpmiToinw', 'thursday');
var friday = new Order('Panfried Salmon', "50.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BN2RGHbg59B8ZXyFw_DYr-TxcgvWytpf9S4cBP_QsS4BE3A6', 'friday');
var saturday = new Order('Risotto', "60.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55nb1tSxVwzWXFtJrjPg6PaQ2HgaXUSVp8EemgCwofzfmLi_Z', 'saturday');
var sunday = new Order('Chicken Curry', "50.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAFfB6dpH48AwBQrleEJOoE608OBE1JILtU-yUO1AnHQ6Tgan', 'sunday');

var dishes = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];



var html = "";
for(i =0; i < dishes.length; i++ ){
    if (dishes[i].day == 'monday')
    html += dishes[i].createHTML();
}

document.getElementById('Order').innerHTML = html 
