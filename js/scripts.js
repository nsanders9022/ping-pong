var pingPong = function(number) {

  var outputArray = [];

  if (!number) {
    outputArray.push("Please enter a number");
  } else {
    for (i = 1; i <= number; i++) {
      if (i % 3 ===  0 && i % 5 === 0){
        outputArray.push(" PingPong");
      } else if (i % 3 ===  0){
        outputArray.push(" ping");
      } else if (i % 5 ===  0){
        outputArray.push(" pong");
      } else {
        outputArray.push(" " + i);
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
      $("#output").append("<img src='https://cdn4.iconfinder.com/data/icons/sports-38/59/ping_pong_ball-128.png'><li>" + pingPong(userInput)[index] + "</li>")

    });
    $("ul li:contains(ping)").addClass("ping");
    $("ul li:contains(pong)").addClass("pong");
    $("ul li:contains(PingPong)").addClass("ping-pong");

  })
});
