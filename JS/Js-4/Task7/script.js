function getUniqueElements(arr) {
    return arr.filter(function(num) {
    return arr.indexOf(num) === arr.lastIndexOf(num);
    });
}
const arr = [1, 2, 2, 3, 4, 4, 5];
const result = getUniqueElements(arr);
console.log(result);