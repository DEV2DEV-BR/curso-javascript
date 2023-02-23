let resultado = "";
let i = 0;

do {
  i++;
  resultado += `${i} `;
  console.log(resultado, "dentro do while");
} while (i < 5);

console.log(resultado, "fora do while");
