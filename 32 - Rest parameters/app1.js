// function sum(n1, n2, n3) {
//   return n1 + n2 + n3;
// }

// console.log(sum(1, 2, 1));

function sum(...args) {
  // for (const number of args) {
  //   total += number;
  // }

  const initialValue = 0;
  const total = args.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    initialValue
  );

  return total;
}

console.log(sum(1, 2, 3, 3, 4, 5, 5, 6));
