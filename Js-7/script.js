document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentForm");
    const taskTableBody = document.getElementById("taskTableBody");
    let currentRow = null;
    const namePattern = /^[a-zA-Z\s]+$/;
    const phonePattern = /^\d{10}$/;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const genderElements = document.getElementsByName("gender");
        let gender = null;
        for (let i = 0; i < genderElements.length; i++) {
            if (genderElements[i].checked) {
                gender = genderElements[i].value;
                break;
            }
        }
    const subjectElements = document.getElementsByName("subject");
    const subjects = [];
    for (let i = 0; i < subjectElements.length; i++) {
        if (subjectElements[i].checked) {
            subjects.push(subjectElements[i].value);
        }
    }
        const dob = document.getElementById("dob").value.trim();
        const location = document.getElementById("location").value;
        if (!name.match(namePattern)) {
            alert("Please enter a valid name (letters and spaces only).");
            return;
        }
        if (!age || age <= 0) {
            alert("Please enter a valid age.");
            return;
        }
        if (!phone.match(phonePattern)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        if (!gender) {
            alert("Please select your gender.");
            return;
        }
        if (subjects.length === 0) {
            alert("Please select at least one subject.");
            return;
        }
        if (!dob) {
            alert("Please select your date of birth.");
            return;
        }
        if (!location) {
            alert("Please select your location.");
            return;
        }
        if (currentRow) {
            currentRow.cells[0].innerText = name;
            currentRow.cells[1].innerText = age;
            currentRow.cells[2].innerText = phone;
            currentRow.cells[3].innerText = gender;
            currentRow.cells[4].innerText = subjects.join(", ");
            currentRow.cells[5].innerText = dob;
            currentRow.cells[6].innerText = location;

            currentRow = null;
            form.reset();
            return;
        }
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${phone}</td>
            <td>${gender}</td>
            <td>${subjects.join(", ")}</td>
            <td>${dob}</td>
            <td>${location}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        taskTableBody.appendChild(row);
        form.reset();
    });
    taskTableBody.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("edit-btn")) {
            const row = target.closest("tr");
            document.getElementById("name").value = row.cells[0].innerText;
            document.getElementById("age").value = row.cells[1].innerText;
            document.getElementById("phone").value = row.cells[2].innerText;
        const genderElements = document.getElementsByName("gender");
        for (let i = 0; i < genderElements.length; i++) {
            if (genderElements[i].value === row.cells[3].innerText) {
                genderElements[i].checked = true;
                break;
            }
        }
        const subjectElements = document.getElementsByName("subject");
        const subjects = row.cells[4].innerText.split(", ");
        for (let i = 0; i < subjectElements.length; i++) {
            subjectElements[i].checked = subjects.includes(subjectElements[i].value);
        }


            document.getElementById("dob").value = row.cells[5].innerText;
            document.getElementById("location").value = row.cells[6].innerText;
            currentRow = row;
        }
        if (target.classList.contains("delete-btn")) {
            const row = target.closest("tr");
            taskTableBody.removeChild(row);
        }
    });
});
