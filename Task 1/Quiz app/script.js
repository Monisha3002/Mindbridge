document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    const questions = [
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
      },
      {
        question: 'Which language is used for web development?',
        options: ['Python', 'JavaScript', 'C++', 'Ruby'],
        correctAnswer: 'JavaScript',
      },
      {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
      },
    ];
  
    const loginDiv = document.getElementById('login');
    const quizDiv = document.getElementById('quiz');
    const resultDiv = document.getElementById('result');
    const dashboardDiv = document.getElementById('dashboard');
    const startQuizBtn = document.getElementById('startQuiz');
    const nextQuestionBtn = document.getElementById('nextQuestion');
    const scoreSpan = document.getElementById('score');
    const resultTable = document.getElementById('resultTable');
    const dashboardTable = document.getElementById('dashboardTable');
    const viewRankingBtn = document.getElementById('viewRanking');
  
    let userName = '';
    let userEmail = '';
    let rankings = [];
    startQuizBtn.addEventListener('click', () => {
      userName = document.getElementById('name').value;
      userEmail = document.getElementById('email').value;
  
      if (!userName || !userEmail) {
        alert('Please enter both name and email.');
        return;
      }
  
      loginDiv.style.display = 'none';
      quizDiv.style.display = 'block';
      displayQuestion();
    });
    nextQuestionBtn.addEventListener('click', () => {
      const selectedOption = document.querySelector('input[name="option"]:checked');
  
      if (!selectedOption) {
        alert('Please select an answer');
        return;
      }
  
      const userAnswer = selectedOption.value;
      userAnswers.push({
        question: questions[currentQuestionIndex].question,
        userAnswer,
        correctAnswer: questions[currentQuestionIndex].correctAnswer,
      });
      if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
        score++;
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    });
    function displayQuestion() {
      const questionData = questions[currentQuestionIndex];
      document.getElementById('questionText').textContent = questionData.question;
      const optionsList = document.getElementById('optionsList');
      optionsList.innerHTML = '';
  
      questionData.options.forEach(option => {
        const li = document.createElement('li');
        li.innerHTML = `
          <label>
            <input type="radio" name="option" value="${option}">
            ${option}
          </label>
        `;
        optionsList.appendChild(li);
      });
    }
    function displayResult() {
      quizDiv.style.display = 'none';
      resultDiv.style.display = 'block';
  
      scoreSpan.textContent = score;
  
      userAnswers.forEach(answer => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${answer.question}</td>
          <td>${answer.userAnswer}</td>
          <td>${answer.correctAnswer}</td>
        `;
        resultTable.appendChild(tr);
      });
      rankings.push({
        name: userName,
        email: userEmail,
        score,
      });
    }
    viewRankingBtn.addEventListener('click', () => {
      resultDiv.style.display = 'none';
      dashboardDiv.style.display = 'block';
      rankings.sort((a, b) => b.score - a.score);
  
      dashboardTable.innerHTML = '';
  
      rankings.forEach((ranking, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${ranking.name}</td>
          <td>${ranking.email}</td>
          <td>${ranking.score}</td>
        `;
        dashboardTable.appendChild(tr);
      });
    });
  });
  