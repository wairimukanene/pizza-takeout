let price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total;
}
$(document).ready(function(){
  function resetDefault(){
    pizzaName=$("#name option:selected") .text("Select Name" );
    pizzaSize = $("#size option:selected").text("Select Size");
    pizzaToppings = $("#toppings option:selected").text("Select Topping");
    pizzaCrust = $("#crust option:selected").text("Select Crust");
  }
  $("#proceed").click(function(){
    $(".table").show();
    $(".btn-checkout").show();
    let pName = $("#name option:selected").text();
    let pSize = $("#size option:selected").val();
    let pTopping = $("#toppings option:selected").val();
    let pCrust = $("#crust option:selected").val();

    let pName = parseInt($("#name option:selected").text());
    let pSize = parseInt($("#size option:selected").val());
    let pTopping = parseInt($("#toppings option:selected").val());
    let pCrust = parseInt($("#crust option:selected").val());
    let total = pName + pSize + pTopping + pCrust;
    let checkoutTotal = total;

    $("#pizzaname").html(pizzaName);
    $("#pizzasize").html(pizzaToppings);
    $("#pizzacrust").html(pizzaCrust);
    $("#pizzatopping").html(pizzaTopping);
    $("#totals").html(total);

    console.log(totals);
    $("#proceed").click(function() {
      let pName=$("#name option:selected").text();
      let pSize = $("#size option:selected").val();
      let pTopping = $("#toppings option:selected").val();
      let pCrust = $("#crust option:selected").val();

      let pName = parseInt($("#name option:selected").text());
      let pSize = parseInt($("#size option:selected").val());
      let pTopping = parseInt($("#toppings option:selected").val());
      let pCrust = parseInt($("#crust option:selected").val());
      let total = pName + pSize + pTopping + pCrust;
      let checkoutTotal = total;
      checkoutTotal = checkoutTotal + total;
      
      let newOrder = new Order( pizzaName ,pizzaSize, pizzaTopping, pizzaCrust, total);
      let newOrderSummary = '<tr>' + '<td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' +newOrder.topping + '</td><td id="totals">' + newOrder.totals + '</td></tr>'
      $("#totals").append(newOrderSummary);  
      console.log(checkoutTotal);
    });
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

      
