const fs = require("fs");

const fileName = process.argv[2];

// permet de lire le fichier txt + de transformer la chaine de carctères en un array
try {
  const data = fs.readFileSync(fileName, "utf8");
  
  const numberArray = data
    .trim()
    .split(" ")
    .map((num) => parseInt(num));
  console.log("array de base:" ,numberArray);

  const bubbleSorted = bubbleSorting(numberArray);
  console.log(
    bubbleSorted
  );

  const insertionSorted = insertionSorting(numberArray);
  console.log(
   "insertion sorting :", insertionSorted
  );

  const selectionSorted = selectionSorting(numberArray);
  console.log(
  "selection sorting:" , selectionSorted
  );
} catch (error) {
  console.error(error.message);
}

// bubbleSorting
function bubbleSorting(numbers) {
  let count = 0;
  for (let n = numbers.length; n > 0; n--) {
    for (let i = 0; i < n - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let sort = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = sort;  
      }
      count++;
    }
  }
  return `bubble sorting : [${numbers}] - ${count} comparaisons`;
}

// insertionSorting
function insertionSorting(numbers) {
  let currentVal;
  let count = 0;
  for (let n = 1; n < numbers.length; n++) {
    currentVal = numbers[n];
    let i;
    for (i = n - 1; i >= 0 && numbers[i] > currentVal; i--) {
      numbers[i + 1] = numbers[i];
      
    }
    numbers[i + 1] = currentVal;
    count++;
  }
  return `insertion sorting : [${numbers}] - ${count} comparaisons`;
}
// selectionSorting
function selectionSorting(numbers) {
  let count = 0;
  for (let n = 0; n < numbers.length; n++) {
    let min = n;
    for (let i = n + 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[n]) {
        min = i;
      }
      count++;
    }
    if (n !== min) {
      let sort = numbers[n];
      numbers[n] = numbers[min];
      numbers[min] = sort;
    }
  }
  return `selection sorting : [${numbers}] - ${count} comparaisons`;
}
