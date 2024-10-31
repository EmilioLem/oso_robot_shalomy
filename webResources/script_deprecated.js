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

document.getElementById("hisOrHerOrHhhname").value = "";    

//addUpContent();
//Sliding thing
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
function showSlide(index){
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}
function switchSlide(isNextSlide){
    document.getElementById("click01").play();
    if(isNextSlide){
        if (currentSlide < slides.length - 1) {
            console.log(`current slide: ${currentSlide}`);
            currentSlide++; // Update the captured currentSlide value
            console.log(`new slide: ${currentSlide}`);
            showSlide(currentSlide);
        } else {
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
            console.log(`current slide: ${currentSlide}`);
            currentSlide--; // Update the captured currentSlide value
            console.log(`new slide: ${currentSlide}`);
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

document.addEventListener('dblclick', ()=>{
    document.documentElement.requestFullscreen().catch((e)=>{
        alert(e);
    })
})