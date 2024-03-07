
var bkgAudio1 = document.getElementById("bkgAudio1");
let mB = document.getElementById("musicButton");

mB.addEventListener("click", ()=>{
    if(mB.classList.contains("playing")){
        bkgAudio1.pause();
    }else{
        bkgAudio1.volume = 1;
        bkgAudio1.play();
    }
    mB.classList.toggle("playing");
});
 



//addUpContent();
var currentSlide = 0;

function showSlide(index){
    var slides = document.querySelectorAll(".slide");
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

function switchSlide(isNextSlide){
    var slides = document.querySelectorAll(".slide");
    document.getElementById("click01").play();
    if(isNextSlide){
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        } else {
            alert("You did it!! finished");
            let request = sendAnswersToServer();
            if(request[0]){
                alert(request[1]);
                //location.reload(true); //Without the cache
            }else{
                alert(request[1]);
            }
        }
    }else{
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }
}

function startTelemetry(){
    //const serverUrl = 'http://192.168.1.200:80/talk';
    const dataToSend = document.getElementById("theESPip").value;

    //console.log(`data to send: ${dataToSend}`);

    
    fetch('/ipAdress', { //Used to be the server's url: window.location.host
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    }).then(response => {
      console.log(response.statusText); // Output: Data received successfully
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

