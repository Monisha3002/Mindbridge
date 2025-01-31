document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const taskSummary = document.getElementById('task-summary');
    const completedTasksDisplay = document.getElementById('completed-tasks');
    const pendingTasksDisplay = document.getElementById('pending-tasks');
    const completionRateDisplay = document.getElementById('completion-rate');
    const closeWindowBtn = document.getElementById('close-window');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function updateTaskSummary() {
        const completedTasks = tasks.filter(task => task.status === 'completed').length;
        const pendingTasks = tasks.filter(task => task.status === 'pending').length;
        const totalTasks = tasks.length;

        completedTasksDisplay.textContent = `Completed Tasks: ${completedTasks}`;
        pendingTasksDisplay.textContent = `Pending Tasks: ${pendingTasks}`;

        if (totalTasks > 0) {
            const completionRate = (completedTasks / totalTasks) * 100;
            completionRateDisplay.textContent = `Completion Rate: ${completionRate.toFixed(2)}%`;
        } else {
            completionRateDisplay.textContent = `Completion Rate: 0%`;
        }
    }

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Estimated time: ${task.estimateTime}</p>
                <p>Status: ${task.status}</p>
                <p>Points: ${task.points}</p>
                <p>Timer: ${task.timerDisplay}</p>
                <button class="start-btn" data-index="${index}">Start Now</button>
                <button class="end-btn" data-index="${index}" ${task.timerRunning ? '' : 'disabled'}>End Now</button>
                <button class="mark-complete-btn" data-index="${index}">Mark as Completed</button>
                <button class="edit-btn" data-index="${index}">Edit Task</button>
                <button class="delete-btn" data-index="${index}">Delete Task</button>
            `;
            taskList.appendChild(taskElement);
        });
        updateTaskSummary();
    }

    function startTimer(taskIndex) {
        const task = tasks[taskIndex];
        const endTime = new Date(task.estimateTime).getTime();
        task.timerRunning = true;

        // Update timer every second
        task.timerInterval = setInterval(() => {
            const now = Date.now();
            const timeRemaining = endTime - now;

            if (timeRemaining <= 0) {
                clearInterval(task.timerInterval);
                task.timerRunning = false;
                task.timerDisplay = '00:00:00';
                task.status = 'completed'; // Automatically mark as completed
            } else {
                const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                task.timerDisplay = `${hours}:${minutes}:${seconds}`;
            }
            renderTasks();
        }, 1000);
    }

    function endTimer(taskIndex) {
        const task = tasks[taskIndex];
        clearInterval(task.timerInterval); // Stop the timer

        const elapsedTime = Date.now() - task.startTime;
        const estimatedTimeInMs = new Date(task.estimateTime).getTime() - Date.now();

        // Calculate points based on time
        if (elapsedTime < estimatedTimeInMs) {
            task.points += 1; // Bonus for finishing early
        } else if (elapsedTime > estimatedTimeInMs) {
            task.points -= 1; // Penalty for being late
        }

        task.timerRunning = false;
        renderTasks();
    }

    function markTaskAsCompleted(taskIndex) {
        const task = tasks[taskIndex];
        task.status = 'completed';
        renderTasks();
    }

    function deleteTask(taskIndex) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }

    function editTask(taskIndex) {
        const task = tasks[taskIndex];
        const newTitle = prompt('Edit task title:', task.title);
        const newDescription = prompt('Edit task description:', task.description);
        const newEstimateTime = prompt('Edit estimated time (yyyy-mm-ddThh:mm:ss):', task.estimateTime);

        if (newTitle) task.title = newTitle;
        if (newDescription) task.description = newDescription;
        if (newEstimateTime) task.estimateTime = newEstimateTime;

        renderTasks();
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const estimateTime = document.getElementById('task-estimate-time').value;
        
        const newTask = {
            title,
            description,
            estimateTime,
            status: 'pending',
            points: 0,
            timerRunning: false,
            timerDisplay: '00:00:00'
        };

        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();

        taskForm.reset();
    });

    taskList.addEventListener('click', (e) => {
        const taskIndex = e.target.dataset.index;

        if (e.target.classList.contains('start-btn')) {
            startTimer(taskIndex);
        }

        if (e.target.classList.contains('end-btn')) {
            endTimer(taskIndex);
        }

        if (e.target.classList.contains('mark-complete-btn')) {
            markTaskAsCompleted(taskIndex);
        }

        if (e.target.classList.contains('delete-btn')) {
            deleteTask(taskIndex);
        }

        if (e.target.classList.contains('edit-btn')) {
            editTask(taskIndex);
        }
    });

    closeWindowBtn.addEventListener('click', () => {
        alert(`Completed Tasks: ${completedTasksDisplay.textContent}\nPending Tasks: ${pendingTasksDisplay.textContent}`);
    });

    renderTasks();
});
