const peoples = [
  "Daniel",
  "João",
  "Marcos",
  "Rogério",
  "Carlos",
  "Maria",
  "Carla",
];

const filteredPeoples = peoples.filter((item) => item.length > 5);

console.log(peoples, "peoples");
console.log(filteredPeoples, "filteredPeoples");

const justMyName = peoples.filter((item) => item === "Daniel");
console.log(justMyName);
