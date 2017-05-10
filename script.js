var car = {
  make: "VW",
  type: "polo",
  color: "blue",
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
      "seat1",
      "seat2",
      "seat3",
      "seat4",],
  turnOn: function () {
      this.isTurnedOn = true;
      return "car is now started";
  }
};

var doCool = function () {
  var currentClassName = document.getElementById('cool').className;

  if (currentClassName === "cool") {
    document.getElementById('cool').className = "cool red";
  }

  else {
    document.getElementById('cool').className = "cool";
  }
}
