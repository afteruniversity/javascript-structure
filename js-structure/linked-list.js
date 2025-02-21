//                  L I N K E D - L I S T

// length:   armazena o número de elementos na lista.
// head:     referência para o primeiro nó da lista (inicialmente null).
// Node:     uma estrutura interna que representa um nó da lista. Cada nó contém:
// element:  valor armazenado no nó.
// next:     referência para o próximo nó.


function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    // Retorna o primeiro nó da lista (head).
    return head;
  };

  this.push = function (element) {
    // Adiciona um novo elemento ao final da lista.
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.pop = function (element) {
    // Remove o último elemento da lista.
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = function () {
    // Retorna true se a list estiver vazia, else return false.
    return length === 0;
  };

  this.indexOf = function (element) {
    // Retorna o índice do elemento na lista.
    var currentNode = head;
    // Retorna -1 se o elemento não for encontrado.
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    // Retorna o elemento em uma posição específica.
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.pushAt = function (index, element) {
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.popAt = function (index) {
    // Remove um elemento específico da lista.
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

var list = new LinkedList();
list.push("dog");
list.push("cat");
list.push("cow");
list.push("seal");
list.push("cougar");
list.push("lion");
console.log(list.size()); // 6
console.log(list.popAt(3)); // seal
console.log(list.elementAt(3)); // cougar
console.log(list.indexOf("dog")); // 0
list.push("seal");
console.log(list.size()); // 6
