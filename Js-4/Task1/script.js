const employees = [ 
    { name: 'John', age: 28 }, 
    { name: 'Anna', age: 22 }, 
    { name: 'Mike', age: 32 },
  ];
  
  function sortByAge(employees) {
    return employees.sort(function(a, b) {
        return a.age - b.age;
      });
  }
  
  const sortedEmployees = sortByAge(employees);
  console.log(sortedEmployees);