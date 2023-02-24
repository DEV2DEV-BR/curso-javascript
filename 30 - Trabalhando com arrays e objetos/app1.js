const cars = [
  {
    id: 1,
    name: "Corola",
  },
  {
    id: 2,
    name: "Honda Civic",
  },
  {
    id: 3,
    name: "Land Rover",
  },
  {
    id: 4,
    name: "Jaguar",
  },
];

for (const car of cars) {
  console.log(car.name);
}

console.log("------------------------");

cars.push({ id: 4, name: "Ferrari" });

for (const car of cars) {
  console.log(car.name);
}
