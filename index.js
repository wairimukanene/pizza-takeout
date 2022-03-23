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
    
    let pName = $("#name option:selected").text();
    let pSize = $("#size option:selected").val();
    let pTopping = $("#toppings option:selected").val();
    let pCrust = $("#crust option:selected").val();
