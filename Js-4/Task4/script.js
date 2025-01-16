function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (frequencyMap[num] === undefined) {
            frequencyMap[num] = 1;
        } else {
            frequencyMap[num] += 1;
        }
        if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequentElement = num;
    }
    }
    return mostFrequentElement;
}
const arr = [1, 2, 2, 3, 3, 3];
console.log(findMostFrequentElement(arr));