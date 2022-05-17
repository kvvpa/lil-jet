/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const nightStand = {
  numDrawers: {
    large: 2,
    small: 1,
  },
  color: "silver",
  numHandles: 3,
  numLegs: 4,
  shiny: true,
};
console.log("the nightstand object:", nightStand);

const drewWhitman = {
  nerd: true,
  gamer: true,
  nice: true,
  eyesNum: 2,
  legsNum: 2,
  shiny: false,
  eatsPizza: true,
  likesMovies: true,
};
console.log("the drewWhitman object:", drewWhitman);
