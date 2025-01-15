const data = [ 
    { id: 1, name: 'A' }, 
    { id: 2, name: 'B' }, 
    { id: 1, name: 'C' },
  ];
  
  function removeDuplicatesById(array) {
    const seenIds = new Set(); 
    return array.filter(item => {
      if (seenIds.has(item.id)) {
        return false; 
      }
      seenIds.add(item.id); 
      return true; 
    });
  }
  
  const uniqueData = removeDuplicatesById(data);
  console.log(uniqueData);
  