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

  const resultArray = addingNumbersToFindK([1, 8, 10, 21], 19)
  console.log(resultArray)

} catch (error) {
  console.error(error.message);
}

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
