function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const higherValue = array[i];
        array[i] = array[j];
        array[j] = higherValue;
      }
    }
  }
  return array;
}

selectionSort([9, 2, 7, 12])