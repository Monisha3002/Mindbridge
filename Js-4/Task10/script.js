const input1 = [1, 2, 3, 5];
const input2 = [4, 7];
const input3 = [6];
const merge = new Set([...input1, ...input2, ...input3]);
const resultSet = [...merge];
console.log(resultSet);
