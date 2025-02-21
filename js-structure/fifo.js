//                  FIRST IN, FIRST OUT (Fila)

function Queue() {
  let data = ["cellphone", "notebook", "smart tv"];

  this.enqueue = function (item) {
    // Adiciona um novo item a fila.
    data.push(item);
  };

  this.dedqueue = function () {
    // Remove um item da fila.
    return data.shift(); // Remove o primeiro item da fila.
  };

  this.front = function () {
    // Retorna o primeiro item da fila.
    return data[0];
  };

  this.isEmpty = function () {
    return data.length === 0;
    // Verifica se a fila está vazia.
  };

  this.size = function () {
    // Retorna o tamanho da fila.
    return data.length;
  };

  this.print = function () {
    // Imprime a fila no console.
    console.log(data.toString());
  };
}

const queue = new Queue();

queue.print();
queue.enqueue("pc");
queue.enqueue("nintendo switch");
queue.print();
queue.dedqueue(); // cellphone

console.log(queue.isEmpty()); // false
console.log(queue.size()); // 4

queue.print();