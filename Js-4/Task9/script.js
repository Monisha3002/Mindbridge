function filterKeys(obj, keysToKeep) {
    return Object.fromEntries(
        Object.entries(obj).filter(function([key]) {
            return keysToKeep.includes(key);
          })
          
    );
  }
  
  const obj = { a: 1, b: 2, c: 3 };
  const keysToKeep = ['a', 'b'];
  const result = filterKeys(obj, keysToKeep);
  console.log(result);