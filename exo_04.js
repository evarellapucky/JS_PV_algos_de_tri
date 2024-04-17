//Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

function buildingWithView(arr) {
  // on initialise deux variables : compteur pour le nb de bâtiments avec vue et hauteur maximale des bâtiments
  let count = 0;
  let maxHeight = 0; 

  //on parcourt l'array de droite à gauche
  for (let i = arr.length - 1; i >= 0; i--) { 
    const currentHeight = arr[i];

    // si la hauteur actuelle est supérieur à la hauteur max
    if (currentHeight > maxHeight) { 
      // on incrémente le nb de bâtiments avec vue
      count++; 
      // et la la hauteur actuelle devient la hauteur max
      maxHeight = currentHeight; 
    }
  }
  return count;
}

const resultArray = buildingWithView([3, 7, 8, 3, 6, 1]);
console.log(resultArray);
