//                  LAST IN, FIRST OUT (Pilha)

function Stack() {
  let items = ["banana", "apple", "watermelon"];

  this.push = function (item) {
    // O método push deve ter um argumento para adicionar um item à pilha.
    // Adiciona um item  a pilha.
    items.push(item);
  };

  this.pop = function () {
    // Remove o item no topo da pilha.
    return items.pop();
  };

  this.peek = function () {
    // Devolve o item que está no topo da lista.
    return items[items.length - 1]; // Última posição do Array.
  };

  this.isEmpty = function () {
    return items.length === 0;
    // If it is true returns 'true', else 'false'.
  };

  this.clear = function () {
    // Limpa a pilha.
    items.length = [];
  };

  this.size = function () {
    // Mostra o tamanho da pilha.
    return items.length;
  };

  this.print = function () {
    // imprime a pilha no console.
    console.log(items.toString());
  };
}

// Precisa instanciar Stack com new antes de chamar os métodos.
let stack = new Stack();

console.log(stack.peek()); // watermelon
stack.print();
stack.push("kiwi");
stack.push("orange");
stack.print();
stack.pop();
stack.print();

console.log(stack.isEmpty()); // false
console.log(stack.size()); // 4

stack.clear();
console.log(stack.isEmpty()); // true
