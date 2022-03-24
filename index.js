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
    $(".checkout").show();
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

    console.log(checkoutTotal);
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
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choice h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliveryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliveryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount);
    });
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliveryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliveryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});

      
