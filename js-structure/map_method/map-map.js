const array = [
  {
    id: 1,
    nome: "João",
    idade: 25,
  },
  {
    id: 2,
    nome: "Maria",
    idade: 30,
  },
  {
    id: 3,
    nome: "Carlos",
    idade: 28,
  },
];

array.map((item, idx) => {
  console.log(item.nome, item.idade, idx);
  // item.'' retorna o item de dentro do objeto que você deseja.
  // idx retorna a posição do index.
});