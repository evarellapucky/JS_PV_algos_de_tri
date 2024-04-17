//Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

function addingNumbersToFindK(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}

const resultArray = addingNumbersToFindK([1, 8, 10, 21], 19);
console.log(resultArray);
