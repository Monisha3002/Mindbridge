function convertObjectToArray(obj) {
    return Object.entries(obj);
  }
  
  const obj = { a: 1, b: 2 };
  const result = convertObjectToArray(obj);
  console.log(result);