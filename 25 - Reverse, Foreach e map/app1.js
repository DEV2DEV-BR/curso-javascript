const cars = ["Corolla", "Honda Civic", "Land Rover", "Fusquinha"];

// reverse inverte as posições do array
console.log(cars);
cars.reverse();
console.log(cars, "cars após o reverse");

// FOREACH PERCORRE TODOS OS ELEMENTOS DO ARRAY
// function logPositions(item) {
//   console.log(item);
// }

// cars.forEach(logPositions);

// cars.forEach((item, index) => {
//   console.log(item, index);
// });

// MAP Percorre e retorna um novo array
const otherCars = cars.map((car) => car);

console.log(otherCars, "otherCars");
