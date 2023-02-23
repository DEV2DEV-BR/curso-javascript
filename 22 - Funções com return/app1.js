function media(n1, n2, n3, n4) {
  const sum = n1 + n2 + n3 + n4;

  return sum / 4;
}

if (media(10, 10, 3, 4) === 10) {
  console.log("Melhor aluno da sala");
} else if (media(10, 10, 3, 4) < 5) {
  console.log("Aluno em recuperação");
} else {
  console.log("Aluno passou");
}
