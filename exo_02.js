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

  const resultArray = buildingWithView([3, 7, 8, 3, 6, 1])
  console.log(resultArray)

} catch (error) {
  console.error(error.message);
}

function buildingWithView(arr) {
  let count = 0 

  for(let i = 0; i < arr.length; i++) {
    let hasView = true;

    for (let j = i+1; j < arr.length; j++) {
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
