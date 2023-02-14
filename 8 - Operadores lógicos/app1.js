// operadores lógicos

// and lógico (&&)
// para que retorne um verdadeiro (true) as duas condições devem ser verdeiras
// true && true = true
// false && false = true
// true && false = false
// false && true = false

console.log("and lógico (&&");
console.log("true && true: ", true && true);
console.log("false && true: ", false && true);
console.log("10 >= 10 && 11 >= 11: ", 10 >= 10 && 11 >= 11);
//                                      true   &&   true
//                                            true
console.log("================================");
console.log("or lógico (||)");
// or lógico (||)
// para que retorne um verdadeiro (true) uma das condições devem ser verdeiras
// true || true = true
// false || false = false
// true || false = true
// false || true = true
console.log("true || true: ", true || true);
console.log("false || true: ", false || true);
console.log("false || false: ", false || false);
console.log("10 >= 10 || 11 >= 11: ", 10 >= 10 || 11 >= 11);

// not lógico (!)
console.log("================================");
console.log("not lógico (!)");

const usuarioAtivo = true;
const inscrito = false;

console.log("usuarioAtivo", !usuarioAtivo);
console.log("inscrito", !inscrito);

console.log("10 >= 10 && 11 >= 11: ", !(10 >= 10) && 11 >= 11);
console.log("10 >= 10", 10 >= 10);
console.log("!(10 >= 10)", !(10 >= 10));
console.log("10 > 10", 10 > 10);
console.log("!(10 > 10)", !(10 > 10));
