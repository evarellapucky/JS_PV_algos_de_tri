//Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

function buildingWithView(arr) {
  let count = 0;
  let maxHeight = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentHeight = arr[i];

    if (currentHeight > maxHeight) {
      count++;
      maxHeight = currentHeight;
    }
  }
  return count;
}

const resultArray = buildingWithView([3, 7, 8, 3, 6, 1]);
console.log(resultArray);
