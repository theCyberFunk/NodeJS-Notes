const EventEmitter = require("events");

const myEmitter = new EventEmitter();

placeOrder = function (food) {
  myEmitter.emit("order", food);
  myEmitter.emit("doorbell");
  myEmitter.emit("payment", food);
};

myEmitter.on("order", function (food) {
  console.log(`Order placed for ${food}`);
});

myEmitter.on("doorbell", function () {
  console.log("RING RING!");
});

myEmitter.on("payment", function (food) {
  console.log(`Enjoy your ${food}`);
});

placeOrder("pizza")