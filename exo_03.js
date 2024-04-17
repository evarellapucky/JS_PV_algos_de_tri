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

  const resultArray = addingNumbersToFindK([10, 15, 3, 7], 17)
  console.log(resultArray)

} catch (error) {
  console.error(error.message);
}

function addingNumbersToFindK(arr, k) {
  const sumPair = {};
  for(let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];
    if (sumPair[temp]) {
      return true
    } else {
      sumPair[arr[i]] = true;
    }
  }
  return false;
}