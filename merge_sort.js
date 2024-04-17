/*const fs = require("fs");

class Merge {
  constructor(array) {
    this.array = array;
  }

  mergeSort(array) {
    if (array.length <= 1) {
      return arr;
    }

    const middle = Math.floor(this.array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const sortedLeft = this.mergeSort(left);
    const sortedRight = this.mergeSort(right);

    return this.merge(sortedLeft, sortedRight);
  }

  merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }

    return result;
  }
}

const fileName = process.argv[2];

try {
  const data = fs.readFileSync(fileName, "utf8");
  const numberArray = data
    .trim()
    .split(" ")
    .map((num) => parseInt(num));
  console.log("array de base:", numberArray);

  const mergeSort = new Merge(numberArray);
  const sortedArray = mergeSort.sort();
  console.log("Merge Sort:", sortedArray);
} catch (error) {
  console.error(error.message);
}
*/

const fs = require("fs");

class Merge {
  constructor(fileName) {
    this.fileName = fileName;
    this.data = this.readDataFromFile();
    this.parsedData = this.parseData();
    this.comparisons = 0;
  }

  readDataFromFile() {
    try {
      return fs.readFileSync(this.fileName, "utf8");
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  parseData() {
    if (!this.data) return null;
    return this.data.split(" ").map((element) => parseInt(element));
  }

  mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = this.mergeSort(array.slice(0, middle));
    const right = this.mergeSort(array.slice(middle));
    return this.merge(left, right);
  }

  merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
      if (right[j] > left[i]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
    this.comparisons++;
    return result;
  }
}
const fileName = process.argv[2];
const sortingMerge = new Merge(fileName);

let sortedArray = sortingMerge.mergeSort(sortingMerge.parsedData);
console.log(
  `Voici notre array trié: ${sortedArray} avec SEULEMENT : ${sortingMerge.comparisons} comparaison(s) !`
);
