const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const array3 = array1.concat(array2);

// operador spread (...)
const array3 = [...array1, ...array2];
console.log(array3);

// SPREAD OPERATOR OBJETOS

const person = {
  id: 1,
  name: "Daniel",
};

const personAddress = {
  city: "Presidente Prudente",
};

const completedPerson = {
  ...person,
  ...personAddress,
};

console.log(completedPerson);
