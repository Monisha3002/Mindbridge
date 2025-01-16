const nums = [1, 2, 3, 4, 5, 6];

function groupByOddEven(numbers) {
  const result = { odd: [], even: [] };

  for (const num of numbers) {
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }

  return result;
}

const groupedNumbers = groupByOddEven(nums);
console.log(groupedNumbers);