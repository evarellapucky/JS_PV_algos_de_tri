const fs = require("fs");

class Merge {
  constructor(fileName) {
    this.fileName = fileName;
    this.data = this.readDataFromFile();
    this.parsedData = this.parseData();
    this.comparisons = 0;
  }

  //fonction qui va lire les données à partir du fichier list.txt
  readDataFromFile() {
    try {
      // Vérifier si le fichier existe
      if (!fs.existsSync(this.fileName)) {
        throw new Error(`Le fichier '${this.fileName}' n'existe pas.`);
      }
  
      return fs.readFileSync(this.fileName, "utf8");
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  // retourne un array d'entiers
  parseData() {
    if (!this.data) return null;
    return this.data.split(" ").map((element) => parseInt(element));
  }

  mergeSort(array) {
    if (!array || array.length <= 1) {
      return array;
    }

    //on cherche l'indice du milieu de l'array
    const middle = Math.floor(array.length / 2);
    //on trie de manière récursive la moitié gauche de l'array
    const left = this.mergeSort(array.slice(0, middle));
    //puis on fait pareil avec le côté droit
    const right = this.mergeSort(array.slice(middle));
    //on retourne les deux moitiés triées
    return this.merge(left, right);
  }

  //fusionne les deux tableaux triés
  merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
      //si l'élément du tableau de droite est supérieur à l'élément du tableau de gauche
      if (right[j] > left[i]) {
        //on ajoute l'élément du tableau de gauche au résultat + on incrémente l'indice du tableau de gauche
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
      this.comparisons++;
    }
    //on ajoute les éléments restants des tableaux gauche et droite s'il y en a
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
    return result;
  }
}
const fileName = process.argv[2];
const sortingMerge = new Merge(fileName);

let sortedArray = sortingMerge.mergeSort(sortingMerge.parsedData);
console.log(
  `Voici notre array trié: ${sortedArray} avec SEULEMENT : ${sortingMerge.comparisons} comparaison(s) !`
);
