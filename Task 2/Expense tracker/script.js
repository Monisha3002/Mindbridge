document.addEventListener("DOMContentLoaded", function () {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    function addExpense() {
        let name = document.getElementById("expenseName").value;
        let amount = parseFloat(document.getElementById("expenseAmount").value);
        let category = document.getElementById("expenseCategory").value;
        let date = document.getElementById("expenseDate").value || new Date().toISOString().split("T")[0];

        if (!name || isNaN(amount) || amount <= 0) {
            alert("Please enter valid expense details");
            return;
        }

        let editIndex = localStorage.getItem("editExpenseIndex");

        if (editIndex !== null) {
            expenses[editIndex] = { name, amount, category, date };
            localStorage.removeItem("editExpenseIndex");
        } else {
            expenses.push({ name, amount, category, date });
        }

        localStorage.setItem("expenses", JSON.stringify(expenses));
        alert("Expense saved successfully!");
        document.getElementById("expenseName").value = "";
        document.getElementById("expenseAmount").value = "";
        document.getElementById("expenseDate").value = "";
        window.location.href = "expense.html";
    }

    if (document.getElementById("addExpenseButton")) {
        document.getElementById("addExpenseButton").addEventListener("click", addExpense);
    }

    if (document.getElementById("expenseTable")) {
        function renderExpenses() {
            let table = document.getElementById("expenseTable");
            let totalAmount = document.getElementById("totalAmount");
            table.innerHTML = "";
            let total = 0;

            expenses.forEach((expense, index) => {
                total += expense.amount;
                table.innerHTML += `
                    <tr>
                        <td>${expense.name}</td>
                        <td>$${expense.amount.toFixed(2)}</td>
                        <td>${expense.category}</td>
                        <td>${expense.date}</td>
                        <td>
                            <button class="edit-btn" onclick="editExpense(${index})">Edit</button>
                            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
                        </td>
                    </tr>
                `;
            });

            totalAmount.innerText = total.toFixed(2);
        }

        renderExpenses();
    }

    window.editExpense = function (index) {
        let expense = expenses[index];
        localStorage.setItem("editExpenseIndex", index);
        localStorage.setItem("editExpenseData", JSON.stringify(expense));
        window.location.href = "index.html";
    };

    window.deleteExpense = function (index) {
        if (confirm("Are you sure you want to delete this expense?")) {
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            renderExpenses();
        }
    };

    if (localStorage.getItem("editExpenseData")) {
        let expense = JSON.parse(localStorage.getItem("editExpenseData"));
        document.getElementById("expenseName").value = expense.name;
        document.getElementById("expenseAmount").value = expense.amount;
        document.getElementById("expenseCategory").value = expense.category;
        document.getElementById("expenseDate").value = expense.date;
        localStorage.removeItem("editExpenseData");
    }
});
