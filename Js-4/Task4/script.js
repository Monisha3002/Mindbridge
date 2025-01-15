const arr = [1, 2, 2, 3, 3, 3];
function findMostFrequent(arr) {
    const frequencyMap = new Map();
    let mostFrequent = null;
    let maxCount = 0;
    arr.forEach(num => {
    const count = (frequencyMap.get(num) || 0) + 1;
    frequencyMap.set(num, count);
    if (count > maxCount) {
        maxCount = count;
        mostFrequent = num;
    }
    });
    return mostFrequent;
    }
    const result = findMostFrequent(arr);
    console.log(result);