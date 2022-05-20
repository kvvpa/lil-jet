/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Car from "./Car.js";

const parentsCar = new Car("Kia", "Forte", "Dark Grey", "Sedan", 5, true);

const davidsNewCar = new Car(
  "Honda",
  "Fit EX",
  "Dark Grey",
  "Hatchback",
  5,
  true
);

const joeysCar = new Car("Kia", "Soul", "Blue", "Hatchback", 5, true);

const davidsOldCar = new Car("Scion", "XA", "Silver", "Hatchback", 5, true);

console.log("Joey's Car:", joeysCar);
console.log("David's Old Car:", davidsOldCar);
console.log("David's New Car:", davidsNewCar);
console.log("Parent's Car:", parentsCar);
