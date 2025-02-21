//                  B U B B L E - S O R T

const nums = [7, 5, 3, -2, 1];

function BubbleSort(array) {
  // Exibir o array de forma ordenada.
  for (let i = 0; i < array.length; i++) {
    // Verificação de cada número.
    for (let y = 0; y < array.length - 1; y++) {
      // Se o valor for MAIOR.
      if (array[y] > array[y + 1]) {
        let temp = array[y]; // Variável temporária.
        array[y] = array[y + 1];
        array[y + 1] = temp; // Troca os itens de posição.
      }
    }
  }
  console.log("Array ordenado: " + array);
}

BubbleSort(nums);

// Bubble Sort é um algoritimo de ordenação.
// A proposta é que ele coloque os elementos em ordem.

// Se o elemento a esquerda for maior que o elemento a direita, então, deve haver uma troca dos valores.

// A ideia é sempre deixar o maior valor a direita,
// e caso não seja maior, então o índice vai fazer a comparação do item que estava a direita com o próximo

// O MAIOR elemento deve estar posicionado a direita.