const fs = require('fs');

// Read the JSON file
fs.readFile('myWrongJson.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const dataFull = JSON.parse(data);
        generateHTML(dataFull);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

// Function to generate HTML from dataFull object
function generateHTML(dataFull) {
    let htmlContent = '';

    dataFull.forEach((questionBlock, indexG)=>{
        htmlContent += `<div class="slide">
        <h1>Sección: `;
        switch(indexG){
            case 0: htmlContent += "depresión"; break;
            case 1: htmlContent += "ansiedad"; break;
            case 2: htmlContent += "estrés"; break;
            case 3: htmlContent += "estrés 2"; break;
        }
        htmlContent += `</h1>`;
        htmlContent += `    <div class="switchButtonsArea">\n`;
        htmlContent += `        <button class="slideButton" onclick="goHome()">GoHome</button>\n`;
        htmlContent += `        <button class="slideButton" onclick="switchSlide(false)">Anterior</button>\n`;
        htmlContent += `        <button class="slideButton" onclick="switchSlide(true)">Siguiente</button>\n`;
        htmlContent += `    </div>\n</div>`;

        questionBlock.forEach((question, index) => {
            // Verify if it's the beginning of that section... in that case, open a form.
            // If it's the end... close the form and modify the button so it sends the form 
            // and returns to the home Page :0 or maybe not!
    
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
            htmlContent += `        <button class="slideButton" onclick="goHome()">GoHome</button>\n`;
            htmlContent += `        <button class="slideButton" onclick="switchSlide(false)">Anterior</button>\n`;
            htmlContent += `        <button class="slideButton" onclick="switchSlide(true)">Siguiente</button>\n`;
            htmlContent += `    </div>\n`;
            htmlContent += `</div>\n\n`;
        });

    })


    // Write the generated HTML content to a file
    fs.writeFile('questionsHTML.html', htmlContent, (err) => {
        if (err) {
            console.error('Error writing HTML file:', err);
            return;
        }
        console.log('HTML file generated successfully!');
    });
}
