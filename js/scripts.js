//Business Logic
var price = 10;

function Pizza(pizzaSize, topping1, topping2) {
  this.pizzaSize = pizzaSize;
  this.topping1 = topping1;
  this.topping2 = topping2;
};

Pizza.prototype.calcPrice = function() {


  return price = price + parseInt(this.pizzaSize) + parseInt(this.topping1) + parseInt(this.topping2);

};



//UI Logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {

    event.preventDefault();

    var inputSize = $("input:radio[name=pizzaSize]:checked").val();
    var inputTopping1 = $("#topping1").val();
    var inputTopping2 = $("#topping2").val();

    var newPizza = new Pizza(inputSize, inputTopping1, inputTopping2);

    console.log(newPizza);

    newPizza.calcPrice();

    $("h2").text("$" + price);

  }); //ends submit event listener
}); //ends Document Ready
