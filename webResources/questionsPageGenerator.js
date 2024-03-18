const fs = require('fs');

// Read the JSON file
fs.readFile('myWrongJson.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const questions = JSON.parse(data);
        generateHTML(questions);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

// Function to generate HTML from questions object
function generateHTML(questions) {
    let htmlContent = '';

    questions.forEach((question, index) => {
        htmlContent += `<div class="slide">\n`;
        htmlContent += `    <h3>${question.question}</h3>\n`;
        htmlContent += `    <br>\n`;
        htmlContent += `    <div class="options-container">\n`;

        question.answers.forEach((answer, ansIndex) => {
            htmlContent += `       <div class="option">\n`;
            htmlContent += `        <div class="cuttonB"></div>\n`;
            htmlContent += `            <p class="answer answer${index} textButton${ansIndex}" onclick="setAnswer(this, ${index}, ${ansIndex})">${answer}</p>\n`;
            htmlContent += `        </div>\n`;
            htmlContent += `       <br>\n`;
        });

        htmlContent += `    </div>\n`;
        htmlContent += `    <div class="switchButtonsArea">\n`;
        htmlContent += `        <button class="slideButton" onclick="switchSlide(false)">Anterior</button>\n`;
        htmlContent += `        <button class="slideButton" onclick="switchSlide(true)">Siguiente</button>\n`;
        htmlContent += `    </div>\n`;
        htmlContent += `</div>\n\n`;
    });

    // Write the generated HTML content to a file
    fs.writeFile('questionsHTML.html', htmlContent, (err) => {
        if (err) {
            console.error('Error writing HTML file:', err);
            return;
        }
        console.log('HTML file generated successfully!');
    });
}
