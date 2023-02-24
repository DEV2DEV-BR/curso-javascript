// CRIANDO UM NOVO OBJETO
const car = {
  name: "Corolla",
  color: "Black",
  fabrication: 2023,
  "size-car": 4,
  "air-bag": true,
};

// ACESSANDO PROPRIEDADES DO OBJETO
console.log(car.name);
console.log(car.color);
console.log(car["size-car"]);
console.log(car["air-bag"]);

// MODIFICAR AS PROPRIEDADES DE UM OBJETO
car.name = "Honda Civic";
console.log(car.name, "Nome do carro");

// CRIANDO UMA NOVA PROPRIEDADE DE UM OBJETO
console.log(car.age, "antes de criar a propriedade");
car.age = 1;
console.log(car.age, "após criar a propriedade");

// REMOVER UMA PROPRIEDADE
delete car.age;
console.log(car.age, "Após excluir a propriedade");

if ("name" in car) {
  console.log("Existe a propriedade name dentro do objeto car");
} else {
  console.log("Não existe a propriedade name dentro do objeto car");
}
