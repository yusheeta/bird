function migratoryBirds(arr) {
  let type1 = 0;
  let type2 = 0;
  let type3 = 0;
  let type4 = 0;
  let type5 = 0;
  let mostFrequentBird = 0;
  let maxType = 0;
  let allBirdTypes = [type1, type2, type3, type4, type5];

  for (let i=0; i<arr.length; i++){
    switch (arr[i]) {
      case 1:
        type1++;
        break;
      case 2:
        type2++
        break;
      case 3:
        type3++
        break;
         case 4:
        type4++
        break;
      default:
        type5++
        break;
    };
  };
  // Showing the type amounts:
  //console.log(type1, type2, type3, type4, type5)

  // Attributes values an array with all type's frequency
  allBirdTypes = [type1, type2, type3, type4, type5];
  // Determine what the most frequent type of bird
  for (let j=0; j<allBirdTypes.length; j++) {
    if (allBirdTypes[j] > maxType) {
      maxType = allBirdTypes[j]
      mostFrequentBird = j+1;
    }
  };

  // Return the most frequent bird
  return mostFrequentBird;
  //console.log(mostFrequentBird);
}
// Input samples
var arr1 = [1,1,2,2,4,4,4,4,5];
var arr2 = [2,2,2,2,4,4,4,,4,5];
var arr7 = [1,2,2,4,4,4,4,5];
//migratoryBirds(arr2);
//console.log(migratoryBirds(arr1));
//console.log(migratoryBirds(arr2));
console.log(migratoryBirds(arr7));
