var timer = null;
var countdownNumber = 10;
var state;

var changeState = function (state) {
  document.body.className = "bodyState" + state;

if (state == 2) {
  timer = setInterval(function(){
    document.getElementById("countDown").innerHTML = countdownNumber;
    countdownNumber = countdownNumber-1;
  }, 1000);

}
}
