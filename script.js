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

var helpme = function () {
  alert("help me!");
}
