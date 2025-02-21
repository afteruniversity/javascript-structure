//                  O B J E C T
const person = [{
    name: 'Breder',
    age: 21,
    birthplace: 'Brasília'
  },
  {
    name: 'Cleslley',
    age: 21,
    birthplace: 'Brasília'
  },
  {
    name: 'Victor',
    age: 21,
    birthplace: 'Rio de Janeiro'
  }
];
  
  console.log(person[1].name);
  
  // Adiciona uma nova chave 'birthyear'
  person[0].birthyear = '2003';
  console.log(person[0]);
  console.log(person[2]);
  

//          mapeando utilizando .map()

person.map((item, i) => {
    console.log(item.name, i);
});

//          mapeando utilizando o loop for

const dados = [];

for (let i = 0; i < person.length; i++) {
    dados.push(person[i]);
};

console.log(dados);