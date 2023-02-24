const car = {
  name: "Corolla",
  color: "black",
  fabrication: 2020,
  "size-car": "4 Metros",
  "air-bag": true,
};

// ACESSAR PROPRIEDADES DE UM OBJETO
console.log(car.name);
console.log(car["size-car"]);

console.log("-------------------------");

// MODIFICAR O VALOR DE UMA PROPRIEDADE
car.name = "Honda Civic";
console.log(car.name);

// CRIAR UMA NOVA PROPRIEDADE
console.log("========================");
console.log(car.age);
car.age = 3;
console.log(car.age);

// DELETAR UMA PROPRIEDADE
console.log("========================");
delete car.age;
console.log(car.age);

// VERIFICAR SE EXISTE UMA PROPRIEDADE COM ESSE NOME
console.log("========================");
if ("names" in car) {
  console.log("Nome existe dentro de carro");
} else {
  console.log("Nome não existe dentro de carro");
}
