// Quicksort code from GeeksforGeeks

export function quickSort(arr, low, high) {
  if (low >= high) return;
  let pi = partition(arr, low, high);

  quickSort(arr, low, pi - 1);
  quickSort(arr, pi + 1, high);
}

function partition(arr, low, high) {
  let pivot = sumValues(arr[high].numUsers);
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // flip this > sign to change between ascending and descending order
    if (sumValues(arr[j].numUsers) > pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
