// função tradicional
console.log(sum(1, 2), "antes da função ser definida");

function sum(n1, n2) {
  return n1 + n2;
}

// arrow functions
const sumNumbers = (n1, n2) => {
  return n1 + n2;
};
console.log(sumNumbers(1, 2), "antes da arrow function ser definida");

// HOISTING => VAR E FUNCTION
