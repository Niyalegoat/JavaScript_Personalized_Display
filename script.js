document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const resultDiv = document.getElementById('results');
    const answerBoxes = document.quarySelectorAll('.answerbox');

    submitButton.addEventListener('click', function() {
        let score = 0;
        let resultHTML = '';

    answerBoxes.forEach(answerBox => {
        const userAnswer = answerBoxes.textContent.trim();
        const correctAnswer = answerBox.dataset.correctAnswer;
        const question = answerBox.previousElementSibling.textContent; //get the question

        if(userAnswer.toLowerCase()=== correctAnswer.toLowerCase()) {
        score++;
        resultHTML += `<p class="correct">${question} Your answer is correct!</p>
            }
            
        });
    })
})