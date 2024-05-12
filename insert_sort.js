/* Creating the programme for Insertion Sorting in Java Script */

function insertionSort(arr) {
  const len = arr.length; // Получаем длину массива
  for (let i = 1; i < len; i++) {
    // Начинаем с второго элемента, так как первый считаем отсортированным
    let key = arr[i]; // Запоминаем текущий элемент
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // Перемещаем все элементы больше текущего на одну позицию вперёд
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; // Вставляем текущий элемент в правильную позицию в отсортированной части массива
  }
  return arr; // Возвращаем отсортированный массив
}
// Пример использования:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Before sorting:", array);
console.log("After sorting:", insertionSort(array));
