const peoples = [
  "Daniel",
  "João",
  "Marcos",
  "Rogério",
  "Carlos",
  "Maria",
  "Carla",
];

const myNamePosition = peoples.find((item) => item === "Lopes");
console.log(myNamePosition);

const myNamePositionIndex = peoples.findIndex((item) => item === "Lopes");
console.log(myNamePositionIndex);
