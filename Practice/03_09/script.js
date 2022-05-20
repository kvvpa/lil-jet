/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (nameStatus) {
    this.name = nameStatus;
  },
  newVolume: function (volumeStatus) {
    this.volume = volumeStatus;
  },
  newColor: function (colorStatus) {
    this.color = colorStatus;
  },
  newPocketNum: function (pocketNumStatus) {
    this.pocketNum = pocketNumStatus;
  }
};

// console.log("name before:", backpack.name);
// backpack.newName("Baller Backpack");
// console.log("name after:", backpack.name);

// console.log("volume before:", backpack.volume);
// backpack.newVolume(50);
// console.log("volume after:", backpack.volume)

// console.log("color before:", backpack.color);
// backpack.newColor("orange");
// console.log("color after:", backpack.color)

console.log("pocketNum before:", backpack.pocketNum);
backpack.newPocketNum(34);
console.log("pocketNum after:", backpack.pocketNum);
