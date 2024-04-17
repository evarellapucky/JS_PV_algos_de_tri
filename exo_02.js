//Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

function buildingWithView(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let hasView = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        hasView = false;
        break;
      }
    }
    if (hasView) {
      count++;
    }
  }
  return count;
}

const resultArray = buildingWithView([3, 7, 8, 3, 6, 1]);
console.log(resultArray);
