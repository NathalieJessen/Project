class dotd {
    constructor(title, description, price, image, day) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.day = day;

    }


    createHTML() {
        return "<h1>" + this.title + "</h1>" + 
        "<p>" + this.description + "</p>" + 
        "<span>DKK" + this.price + "</span>" + 
        "<class='shopItem'><img width='400px' src=" + this.image + ">" +
        "<p>" + this.day + 
        "s dish </p>"

        //return '"><h1>'+ this.title + '</h1><p>' + this.description+ '</p>' + this.price+ '<img src ="' + this.image + '"><p>'+ this.day+ '</p>'

    }
}




var monday = new dotd('Poke Bowl', 'Rice, Fish and Soybeans ', "60.00", 'https://yupitsvegan.com/wp-content/uploads/2015/02/teriyaki_cauliflower_rice_bowls_vegan.jpg', 'monday');
var tuesday = new dotd('Pasta Carbonara', 'Spaghetti, eggs, bacon, Parmasan cheese', "50.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbnrc6SRV5yX23Dc7D34QVVR9U17UKsJnjYj3F0M8LQGPFLbWrw', 'tuesday');
var wednesday = new dotd('Cesear Salad', 'Chicken, iceberg salad, bacon, Parmasan cheese, Ceasar dressing', "50.00", 'https://img.taste.com.au/sxVivf6r/taste/2010/01/the-best-spaghetti-carbonara-118943-2.jpg', 'wednesday');
var thursday = new dotd('Hamburger', 'Tomato, onions, ketchup, cheddar cheese, bacon, salad, mustard', "70.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1yDHNIocg8rvReOUdXZLb11J7QY-o4zydtaD5Z383kpmiToinw', 'thursday');
var friday = new dotd('Panfried Salmon', 'Salmon, potatomash, lemon, dill', "50.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BN2RGHbg59B8ZXyFw_DYr-TxcgvWytpf9S4cBP_QsS4BE3A6', 'friday');
var saturday = new dotd('Risotto', 'Saffron, rice, Parmasan cheese', "60.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55nb1tSxVwzWXFtJrjPg6PaQ2HgaXUSVp8EemgCwofzfmLi_Z', 'saturday');
var sunday = new dotd('Chicken Curry', 'Chicken, curry, coriander', "50.00", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAFfB6dpH48AwBQrleEJOoE608OBE1JILtU-yUO1AnHQ6Tgan', 'sunday');

var dishes = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];



var html = "";
for(i =0; i < dishes.length; i++ ){
    if ( dishes[i].day == 'monday')
    html += dishes[i].createHTML();
}

document.getElementById('dotd').innerHTML = html 


