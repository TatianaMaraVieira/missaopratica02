const swap = (vetor, posicao1, posicao2) => {
  [vetor[posicao1], vetor[posicao2]] = [vetor[posicao2], vetor[posicao1]];
};

const shuffle = (vetor, quantidadeTrocas) => {
  const n = vetor.length;

  for (let i = 0; i < quantidadeTrocas; i++) {
    const posicao1 = Math.floor(Math.random() * n);
    const posicao2 = Math.floor(Math.random() * n);
    swap(vetor, posicao1, posicao2);
  }
};

const bubbleSort = (vetor) => {
  const n = vetor.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
      }
    }
  }
};

const insertionSort = (vetor) => {
  const n = vetor.length;

  for (let i = 1; i < n; i++) {
    let chave = vetor[i];
    let j = i - 1;

    while (j >= 0 && vetor[j] > chave) {
      vetor[j + 1] = vetor[j];
      j = j - 1;
    }

    vetor[j + 1] = chave;
  }
};

const selectionSort = (vetor) => {
  const n = vetor.length;

  for (let i = 0; i < n - 1; i++) {
    let indiceMinimo = i;

    for (let j = i + 1; j < n; j++) {
      if (vetor[j] < vetor[indiceMinimo]) {
        indiceMinimo = j;
      }
    }

    if (indiceMinimo !== i) {
      swap(vetor, i, indiceMinimo);
    }
  }
};

const quickSort = (vetor, inicio, fim) => {
  if (inicio < fim) {
    const pivotIndex = particionamento(vetor, inicio, fim);
    quickSort(vetor, inicio, pivotIndex - 1);
    quickSort(vetor, pivotIndex + 1, fim);
  }
};

const particionamento = (vetor, inicio, fim) => {
  const pivot = vetor[fim];
  let indiceBaixo = inicio;

  for (let i = inicio; i < fim; i++) {
    if (vetor[i] < pivot) {
      swap(vetor, i, indiceBaixo);
      indiceBaixo++;
    }
  }

  swap(vetor, indiceBaixo, fim);
  return indiceBaixo;
};
