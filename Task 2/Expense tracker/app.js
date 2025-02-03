document.addEventListener('DOMContentLoaded', function () {
    const addExpenseButton = document.getElementById('addExpenseButton');
    const expenseTable = document.getElementById('expenseTable');
    const totalAmountElement = document.getElementById('totalAmount');

    // Function to update total expense
    function updateTotalExpense(expenses) {
        const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        totalAmountElement.textContent = total.toFixed(2);
    }

    // Function to add multiple expenses to the table
    function addExpenseToTable(expenses) {
        expenseTable.innerHTML = ""; // Clear table before adding new entries
        expenses.forEach((expense, index) => {
            const row = expenseTable.insertRow();
            row.insertCell(0).textContent = expense.name;
            row.insertCell(1).textContent = `$${expense.amount}`;
            row.insertCell(2).textContent = expense.category;
            row.insertCell(3).textContent = expense.date;

            // Add edit button
            const editCell = row.insertCell(4);
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', function () {
                sessionStorage.setItem('editExpenseIndex', index);
                window.location.href = 'index.html';
            });
            editCell.appendChild(editButton);

            // Add delete button
            const deleteCell = row.insertCell(5);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function () {
                expenses.splice(index, 1);
                sessionStorage.setItem('expenses', JSON.stringify(expenses));
                addExpenseToTable(expenses);
                updateTotalExpense(expenses);
            });
            deleteCell.appendChild(deleteButton);
        });
    }

    // Check if redirected with expenses in sessionStorage
    if (window.location.pathname.includes('expense.html')) {
        const storedExpenses = JSON.parse(sessionStorage.getItem('expenses')) || [];
        addExpenseToTable(storedExpenses);
        updateTotalExpense(storedExpenses);
    }

    // Event listener for the add expense button
    addExpenseButton.addEventListener('click', function () {
        const name = document.getElementById('expenseName').value;
        const amount = document.getElementById('expenseAmount').value;
        const category = document.getElementById('expenseCategory').value;
        const date = document.getElementById('expenseDate').value;

        if (name && amount && category && date) {
            let expenses = JSON.parse(sessionStorage.getItem('expenses')) || [];
            const editIndex = sessionStorage.getItem('editExpenseIndex');
            if (editIndex !== null) {
                expenses[editIndex] = { name, amount, category, date };
                sessionStorage.removeItem('editExpenseIndex');
            } else {
                expenses.push({ name, amount, category, date });
            }
            sessionStorage.setItem('expenses', JSON.stringify(expenses));

            // Redirect to the expense list page
            window.location.href = 'expense.html';
        } else {
            alert('Please fill out all fields');
        }
    });

    // If editing an expense, populate the fields
    const editIndex = sessionStorage.getItem('editExpenseIndex');
    if (editIndex !== null && window.location.pathname.includes('index.html')) {
        const expenses = JSON.parse(sessionStorage.getItem('expenses')) || [];
        const expense = expenses[editIndex];
        if (expense) {
            document.getElementById('expenseName').value = expense.name;
            document.getElementById('expenseAmount').value = expense.amount;
            document.getElementById('expenseCategory').value = expense.category;
            document.getElementById('expenseDate').value = expense.date;
        }
    }
});