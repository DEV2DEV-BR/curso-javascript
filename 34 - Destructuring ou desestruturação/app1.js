const numbers = [1, 2, 3, 4, 5, 6];

const primeiraPosicao = numbers[0];
const segundaPosicao = numbers[1];
const terceiraPosicao = numbers[2];
const quartaPosicao = numbers[3];

console.log(primeiraPosicao, segundaPosicao, terceiraPosicao, quartaPosicao);

// MESCLANDO DESESTRUTURAÇÃO COM REST PARAMETERS
const [primeira, segunda, terceira, ...resto] = numbers;
console.log(primeira, segunda, terceira, resto);

// DESESTRUTURAÇÃO COM OBJETOS
const person = {
  name: "Daniel",
  age: 31,
  city: "Presidente Prudente",
};

const myName = person.name;

const { age, name, city } = person;

console.log(name, city, age);
