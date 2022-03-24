function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust =crust;
  this.topping = topping;
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
    $(".choice").show();
   
    let pName = $("#name option:selected").text();
    let pSize =$("#size option:selected") .text();
    let pCrust =$("#crust option:selected") .text();
    let pTopping=$("#topping  option:selected") .text();
    
    let pSizePrice = parseInt($("#size option:selected").val());
    let pToppingPrice = parseInt($("#topping option:selected").val());
    let pCrustPrice = parseInt($("#crust option:selected").val());
    let total = pSizePrice +  pCrustPrice +  pToppingPrice;
    let checkoutTotal = total;
    console.log(checkoutTotal);

    $("#pizzaname").html(pName);
    $("#pizzasize").html(pSize);
    $("#pizzacrust").html(pCrust);
    $("#pizzatopping").html(pTopping);
    $("#totals").html(total);
    $("#cost").html("sh"+ checkoutTotal);
    

    $("#addPizza").click(function() {
      let pName = $("#name option:selected").text();
      let pSize =$("#size option:selected") .text();
      let pCrust =$("#crust option:selected") .text();
      let pTopping=$("#topping  option:selected") .text();
      
      let pSizePrice = parseInt($("#size option:selected").val());
      let pToppingPrice = parseInt($("#topping option:selected").val());
      let pCrustPrice = parseInt($("#crust option:selected").val());
      let total = pSizePrice +  pCrustPrice +  pToppingPrice;
    
       checkoutTotal = checkoutTotal + total;
      
      let newPizza = new Getpizza( pName ,pSize, pCrust, pTopping, total);
      let newPizzaSummary = '<tr>' + '<td id="pizzaname">' + newPizza.name + '</td><td id="pizzasize">' + newPizza.size + '</td><td id="pizzacrust">' + newPizza.crust + '</td><td id="pizzatopping">' +newPizza.topping + '</td><td id="totals">' + newPizza.total + '</td></tr>'
      $("#ordersmade").append(newPizzaSummary);  
      console.log(checkoutTotal);
      $("#cost").html("sh"+ checkoutTotal);
    });
    $("#checkout").click(function() {
      $(".location").show();
      $(".homeDelivery").show();
    });
      $("#deliver").click(function() {
        checkoutTotal=checkoutTotal+ 150;
        $("#cost").html("sh"+ checkoutTotal);
        let location=$("#place").val();
        $(".home").html(location);
      });
  });
});

      
