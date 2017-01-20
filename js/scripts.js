var pingPong = function(number) {
  var outputArray = []

  for (i = 1; i <= number; i++) {
    outputArray.push(i);
  }

  return outputArray
}




$(document).ready(function(){
  $("#ping-form").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#number").val());

    $("#result").show();
    $("#output").text(pingPong(userInput))

  })
});
