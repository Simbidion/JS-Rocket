

var countdownNumber = 10;
var state;

var timer = null;


var changeState = function (state) {
  document.body.className = "bodyState" + state;
  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById("countDown").innerHTML = countdownNumber;

//countdown
  if (state == 2) {
    timer=setInterval(function(){
      countdownNumber = countdownNumber-1;
      document.getElementById("countDown").innerHTML = countdownNumber;
      if (countdownNumber<=0) {
        changeState(3);
      };
    }, 500);
    }

//decide if success or fail
  else if (state == 3) {
    var success = setTimeout(function() {
      var randomNumber = Math.round(Math.random() *10);
      console.log("Random number: "  +randomNumber);
      if (randomNumber<5) {
        changeState(5);
      }
      else {
        changeState(4);
      }
    }, 500);

  }
}
