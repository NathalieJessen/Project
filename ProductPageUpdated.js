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
        "<h2>" + this.description + "</h2>" + 
        "<div>DKK" + this.price + "</div>" + 
        "<span><img width='500px' src=" + this.image + ">" +
        "<h3>" + this.day + 
        "s dish </h3>"

        //return '"><h1>'+ this.title + '</h1><p>' + this.description+ '</p>' + this.price+ '<img src ="' + this.image + '"><p>'+ this.day+ '</p>'

    }
}




var monday = new dotd('Poke Bowl', 'Roasted Sweet Potato Poke Bowl with Avocado and Sriracha Mayoor.', "60.00", 'images/pokebowl.jpg', 'monday');
var tuesday = new dotd('Pasta Carbonara', 'Spaghetti, eggs, bacon, Parmasan cheese.', "50.00", 'images/Carbonara.jpg', 'tuesday');
var wednesday = new dotd('Cesear Salad', 'Chicken, iceberg salad, bacon, parmasan cheese, topped with ceasar dressing', "50.00", 'images/Cesearsalad.jpg', 'wednesday');
var thursday = new dotd('Hamburger', 'Tomato, onions, ketchup, cheddar cheese, bacon, salad, mustard', "70.00", 'images/hamburger.jpg', 'thursday');
var friday = new dotd('Pan-fried Salmon', 'Crispy pan-seared salmon with potatomash, lemon and freshly chopped parsley.', "50.00", 'images/panfriedsalmon.jpg', 'friday');
var saturday = new dotd('Risotto', 'Mushroom and bacon risotto with parmasan cheese.', "60.00", 'images/risotto.jpg', 'saturday');
var sunday = new dotd('Chicken Curry', 'Chicken, ginger, curry, topped with chopped coriander', "50.00", 'images/chickencurry.jpg', 'sunday');

var dishes = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];



var html = "";
for(i =0; i < dishes.length; i++ ){
    if ( dishes[i].day == 'monday')
    html += dishes[i].createHTML();
}

document.getElementById('dotd').innerHTML = html 


