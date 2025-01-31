let inputString = prompt("Enter a string:");
let characterToCount = prompt("Enter a character to count:");
let count = 0;
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === characterToCount) {
        count++;
    }
}
console.log(count);