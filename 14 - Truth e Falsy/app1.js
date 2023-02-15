if (true) {
  console.log("true é truthy");
}

if (42) {
  console.log("42 é truthy");
}

if ("asdfasdf") {
  console.log("asdfasdf é truthy");
}

if ("") {
  console.log("aspas duplas vazias é truthy");
} else {
  console.log("aspas duplas vazias é falsy");
}

if (0) {
  console.log("0 é truthy");
} else {
  console.log("0 é falsy");
}

if (-0) {
  console.log("-0 é truthy");
} else {
  console.log("-0 é falsy");
}

let inscritoNoCanal;

if (inscritoNoCanal) {
  console.log("Esse usuário já está inscrito");
} else {
  console.log("Esse usuário não está inscrito");
}
