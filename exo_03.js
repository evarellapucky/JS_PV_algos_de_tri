//Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

function addingNumbersToFindK(arr, k) {
  const sumPair = {};
  for (let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];
    if (sumPair[temp]) {
      return true;
    } else {
      sumPair[arr[i]] = true;
    }
  }
  return false;
}

const resultArray = addingNumbersToFindK([10, 15, 3, 7], 17);
const resultSecondArray = addingNumbersToFindK([1, 8, 10, 21], 19);
console.log(resultArray);
console.log(resultSecondArray);
