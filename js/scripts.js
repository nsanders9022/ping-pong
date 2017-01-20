var color = ""

var pingPong = function(number) {

  var outputArray = [];

  if (!number) {
    outputArray.push("Please enter a number");
  } else {
    for (i = 1; i <= number; i++) {
      if (i % 3 ===  0 && i % 5 === 0){
        outputArray.push(" PingPong");
        color = "'.ping-pong'"
      } else if (i % 3 ===  0){
        outputArray.push(" ping");
        color = "'.ping'"
      } else if (i % 5 ===  0){
        outputArray.push(" pong");
        color = "'.pong'"
      } else {
        outputArray.push(" " + i);
        color = "'.number'"
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

    $.each(pingPong(userInput), function(index){
      $("#output").append("<img src='http://pngimg.com/upload/ping_pong_PNG10383.png'><li>" + pingPong(userInput)[index] + "</li>")
      $("li").addClass(color)
    });
  })
});
