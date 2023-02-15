const media = (10 + 1 + 1 + 10) / 4;
console.log(media);
let resultado = "Aluno reprovado";

if (media === 10) {
  resultado = "Aluno aprovado com nota 10";
} else if (media >= 7 && media <= 9) {
  resultado = "Aluno aprovado com uma boa nota";
} else if (media >= 6 && media < 7) {
  resultado = "Aluno será encaminhado para a recuperação";
}

console.log(resultado);

// COMBINAR INFORMAÇÕES E FUNCIONALIDADES

// ESTRUTURA CONDICIONAIS / CONTROLE + OPERADORES LÓGICOS + COMPARAÇÃO
