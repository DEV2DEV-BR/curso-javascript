const nome = "Pedro";

// if (nome === "Daniel") {
//   console.log("O nome é Daniel");
// } else if (nome === "Maria") {
//   console.log("O nome é Maria");
// } else {
//   console.log("Nome desconhecido");
// }

switch (nome) {
  case "Daniel":
    console.log("O nome é Daniel");
    break;
  case "Maria":
    console.log("O nome é Maria");
    break;

  default:
    console.log("Nome desconhecido");
}
