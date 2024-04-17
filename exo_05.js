//Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

function addingNumbersToFindK(arr, k) {
  //initialise le hash pour stocker les nb parcourus
  const sumPair = {}; 
  for (let i = 0; i < arr.length; i++) {
    //calcul de la différence entre k et l'élément actuel du tableau
    const diff = k - arr[i]; 
    //si diff est présent dans sumPair alors on retourne true parce qu'on a trouvé la somme correspondant à K
    if (sumPair[diff]) { 
      return true;
    } else { 
      //sinon on ajoute l'élément dans sumPair et on continue la boucle
      sumPair[arr[i]] = true; 
    }
  }
  return false;
}

const resultArray = addingNumbersToFindK([10, 15, 3, 7], 17);
const resultSecondArray = addingNumbersToFindK([1, 8, 10, 21], 19);
console.log(resultArray);
console.log(resultSecondArray);
