function setAnswer(button, theQuestionIndex, theAnswerIndex){
    document.getElementById("click01").play();
    allButtons = document.querySelectorAll(`.answer${theQuestionIndex}`);
    allButtons.forEach(button => {
        button.style.backgroundColor = "blue";
    }); //First normalize, then add effect :)
    
    button.style.backgroundColor = 'green';
    questionsArray[theQuestionIndex].selected = theAnswerIndex + 1; //Avoid the 0

}

function addUpContent(){   
    const slidesContainer = document.getElementById("slidesContainer");
    
    function createQuestionSection(questionData, index) {
        const slideDiv = document.createElement("div");
        slideDiv.classList.add("slide");

        let theForm = '<div class="options-container">';
        for(let i=0; i<questionData.answers.length; i++){
            theForm += `<div class="option">
            
            <svg class="svg-container cuttonButton${i}" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                <!-- Outermost circle (the largest ring) -->
                <circle cx="30" cy="30" r="30" fill="#e0e0e0" />

                <!-- Second circle (second largest ring) -->
                <circle cx="30" cy="30" r="27" fill="#c0c0c0" />

                <!-- Third circle (third largest ring) -->
                <circle cx="30" cy="30" r="22" fill="#a0a0a0" />

                <!-- Innermost circle (the smallest ring) -->
                <circle cx="30" cy="30" r="17" fill="#808080" />

                <!-- Dots -->
                <circle cx="24" cy="24" r="3" fill="black" />
                <circle cx="36" cy="24" r="3" fill="black" />
                <circle cx="24" cy="36" r="3" fill="black" />
                <circle cx="36" cy="36" r="3" fill="black" />
            </svg>

            <p class="answer answer${index} textButton${i}" onclick="setAnswer(this, ${index}, ${i})">${questionData.answers[i]}</p></div></br>`;
        }

        slideDiv.insertAdjacentHTML("afterbegin", `
            <h3>${questionData.question}</h3>
            ${theForm}</div>
        `);//closes the options.container

        slideDiv.insertAdjacentHTML("beforeend", `
        <div class="switchButtonsArea">
        <button class="slideButton" onclick="switchSlide(false)">Anterior</button>
        <button class="slideButton" onclick="switchSlide(true)">siguiente</button>
    </div>
        `)

        slidesContainer.appendChild(slideDiv);
    }

    
    questionsArray.forEach(function (questionData, index) {
        createQuestionSection(questionData, index);
    });
}


function sendAnswersToServer(){
    //const serverURL = window.location.host;
    //console.log(`The Server url is apparently: ${serverURL}`);
    
    var theRawAnswers = [];
    var theAnswersClassified = [ //possible answers
        //Oportunidad: automáticamente iterar las preguntas y agregar tantos campos como se requieran
        [0, 0, 0, 0], //Estrés
        [0, 0, 0, 0], //Ansiedad
    ];
    var theRatingWords = [
        [],
        ["something"],
        ["low, medium, high"],
        ["bajo", "medio", "alto"],
        ["nada", "poco", "mucho", "todo"]
    ];
    for(question of questionsArray){
        if(question.selected == 0){
            return [false, "Conteste todas las preguntas"];    
        }else{
            theRawAnswers.push(question.selected);
        }
        theAnswersClassified[question.type][question.selected-1]++;
    }
    /*questionsArray.forEach((question)=>{
        if(question.selected == 0){
            return [false, "Conteste todas las preguntas"];    
        }else{
            theRawAnswers.push(question.selected);
        }
        theAnswersClassified[question.type][question.selected-1]++;
    });*/

    console.log(theAnswersClassified);
    
    var theFastResults = [];

    theAnswersClassified.forEach((set)=>{
        var theMaxIndex = Math.max(...set);
        
        console.log(set);
        console.log(`The set: ${JSON.stringify(set)}`);
        console.log(`The set's length: ${JSON.stringify(set.length)}`);
        console.log(`an Index: ${JSON.stringify(set.indexOf(Math.max(...set)))}`);
        console.log(``);
        theFastResults.push(theRatingWords[set.length][set.indexOf(Math.max(...set))]);
        
    });
    let diagnostic = "";
    diagnostic = `
        Sus niveles de estrés son ${theFastResults[0]},
        sus niveles de ansiedad son ${theFastResults[1]}
    `;


    /*/Cada for checará cada sección de preguntas, y sumará al módulo de la pregunta (inciso) el valor booleano unificado.//
    var theAnswersClassified = [ //Notas obtenidad
    [0, 0], //Estrés
        [0, 0], //Ansiedad
    ]
    var cicloDePreguntas = [ //Index de incisos, no preguntas :(
        { start: 0, ends: 3, type: "Estrés"},
        { start: 4, ends: 7, type: "Ansiedad" },
    ]
    
    for(let i=0; i<cicloDePreguntas.length; i++){
        for(let j=cicloDePreguntas[i].start; j<=cicloDePreguntas[i].ends; j++){
            theAnswersClassified[i][(j-cicloDePreguntas[i].start)%theAnswersClassified[0].length] += theRawAnswers[j];
        }    
    }
    

    for(let i=0; i<cicloDePreguntas.length; i++){
        diagnostic += `Los niveles de ${cicloDePreguntas[i].type} son: ${JSON.stringify(theAnswersClassified[i])} \n`;
    }*/

    const dataToSend = {
        name: document.getElementById("hisOrHerOrHhhname").value,
        theRawAnswers: JSON.stringify(theRawAnswers),
        answersClassified: JSON.stringify(theAnswersClassified),
        theDiagnostic: diagnostic,
    }

    fetch('/result', { //Used to be the server's url: window.location.host
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    }).then((response)=>{
        if(response.ok){
            return response.text();
        }else{
            throw new Error('Failed to send data to teeeh_Server');
        }
    }).then((responseText)=>{
        console.log(responseText);
    }).catch((error)=>{
        console.log(error);
    })
    
    return [true, diagnostic];
    console.log(diagnostic);
    alert(diagnostic);
}
