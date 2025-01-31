const data = [ 
    { id: 1, name: 'A' }, 
    { id: 2, name: 'B' }, 
    { id: 1, name: 'C' },
  ];
  
  function removeDuplicates(data) {
    const seenIds = [];
    return data.filter(function(item) {
      return !seenIds.includes(item.id) && seenIds.push(item.id);
    });
  }
  
  const uniqueData = removeDuplicatesById(data);
  console.log(uniqueData);
  