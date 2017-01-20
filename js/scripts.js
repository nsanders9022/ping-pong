// var color = ""

var pingPong = function(number) {

  var outputArray = [];

  if (!number) {
    outputArray.push("Please enter a number");
  } else {
    for (i = 1; i <= number; i++) {
      if (i % 3 ===  0 && i % 5 === 0){
        outputArray.push(" PingPong");
        // color = "'.ping-pong'"
      } else if (i % 3 ===  0){
        outputArray.push(" ping");
        // color = "'.ping'"
      } else if (i % 5 ===  0){
        outputArray.push(" pong");
        // color = "'.pong'"
      } else {
        outputArray.push(" " + i);
        // color = "'.number'"
      }
    }
  }

  return outputArray;
}



$(document).ready(function(){
  $("#ping-form").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#number").val());

    $("ul").empty();
    $("#result").show();
    // $("#result").text(pingPong(userInput))

    $.each(pingPong(userInput), function(index){
      $("#output").append("<li>" + pingPong(userInput)[index] + "</li>")
    });
  })
});
