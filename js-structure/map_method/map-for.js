const users = [
  {
    id: 9,
    nome: "Iago Pedrosa",
  },
  {
    id: 16,
    nome: "Gabriel Azevedo",
  },
  {
    id: 14,
    nome: "Cleslley de Moura",
  },
  {
    id: 15,
    nome: "Maria Clara",
  },
];

const lista = [];
//  lembrando que:
//  (incialização; condição; incremento/decremento)
for (let i = 0; i < users.length; i++) {
  lista.push(users[i].nome);
  // lista recebe o array de (users[posição do index no array].item que você quer chamar)
}

console.log(lista);
