//Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

function buildingWithView(arr) {
  let count = 0; //on initialise le compteur de bâtiments avec vue

  // cette première boucle parcourt l'array de gauche à droite
  for (let i = 0; i < arr.length; i++) { 
    // on initialise une variable pour indiquer que le bâtiment actuel à une vue sur l'ouest
    let hasView = true; 

    //dans cette deuxième boucle on parcourt les bâtiments à droite du bâtiment actuel
    for (let j = i + 1; j < arr.length; j++) { 
      //si la hauteur du bâtiment de droite est supérieure ou égale au bâtiment actuel, alors le bâtiment actuel n'a pas de vue et la boucle cesse
      if (arr[j] >= arr[i]) {
        hasView = false;
        break;
      }
    }
    //si le bâtiment actuel a une vue à l'ouest, alors le compteur s'incrémente
    if (hasView) {
      count++;
    }
  }
  return count;
}

const resultArray = buildingWithView([3, 7, 8, 3, 6, 1]);
console.log(resultArray);
