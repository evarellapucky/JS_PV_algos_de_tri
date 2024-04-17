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
  let count = 0;
  let maxHeight = 0;

  for(let i = arr.length -1; i>=0; i--) {
    const currentHeight = arr[i];

    if(currentHeight > maxHeight) {
      count++;
      maxHeight = currentHeight;
    }
  }
  return count;
}
