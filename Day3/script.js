document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employeeName = document.getElementById('name').value;
    const taskTitle = document.getElementById('title').value;
    const taskDesc = document.getElementById('desc').value;
    const dueDate = document.getElementById('due').value;

    const tableBody = document.getElementById('taskTableBody');
    const newRow = tableBody.insertRow(); 

    const cell1 = newRow.insertCell(0); 
    const cell2 = newRow.insertCell(1); 
    const cell3 = newRow.insertCell(2); 
    const cell4 = newRow.insertCell(3); 

    cell1.textContent = employeeName;
    cell2.textContent = taskTitle;
    cell3.textContent = taskDesc;
    cell4.textContent = dueDate;

        document.querySelector('button[type="submit"]').textContent = 'Update Task';
        
        document.getElementById('taskForm').onsubmit = function(event) {
            event.preventDefault();
            
            cell1.textContent = document.getElementById('name').value;
            cell2.textContent = document.getElementById('title').value;
            cell3.textContent = document.getElementById('desc').value;
            cell4.textContent = document.getElementById('due').value;

            document.getElementById('taskForm').reset();
            document.querySelector('button[type="submit"]').textContent = 'Assign Task';
            document.getElementById('taskForm').onsubmit = handleFormSubmit;
        };
    });


function handleFormSubmit(event) {
    event.preventDefault();
}