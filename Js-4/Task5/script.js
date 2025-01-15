const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

function findCommonElements(arr1, arr2) {
return arr1.filter(element => arr2.includes(element));
}

console.log(findCommonElements(arr1, arr2));
