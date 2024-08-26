if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')//('/ground-eye-analysis/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}





const videoElement = document.getElementById('camera-stream');

const toggleCameraBtn = document.getElementById('toggle-camera-btn');
const measurementBtn = document.getElementById('take-measurement-btn');
const downloadBtn = document.getElementById('download-btn');

const photosT = document.getElementById("photosT"); //photos taken
const emotionS = document.getElementById("emotionS"); //emotions selector
//Make an event listener, alert the state, and save the image with prefix. 
//After every participant, ask to save and... delete current images.

const canvas = document.getElementById("canvas");

let mediaStream = null; // Store media stream reference
let isCameraOn = false; // Boolean to track camera state

let capturedImages = [], aName = '';
let storedNumber = localStorage.getItem('myNumber');
let myNumber = storedNumber !== null ? parseInt(storedNumber) : 0;


toggleCameraBtn.addEventListener('click', async () => {
  if (isCameraOn) {
    
    videoElement.srcObject = null;
    //videoElement.style.display = 'none';
    mediaStream.getTracks().forEach(track => track.stop());
    isCameraOn = false;
    toggleCameraBtn.textContent = 'Abrir cámara';
  } else {
    try {
      const constraints = {
        video: {
          facingMode: "user", // environment
          width: 640,//{ ideal: 1080},//1920}, //min: 1080, ideal: 1080, max: 1080 
          height: 480,//{ ideal: 720},//1080}, //min: 1080, ideal: 1080, max: 1080 
          aspectRatio: 1
        }
      };
      mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      videoElement.srcObject = mediaStream;
      //videoElement.style.display = 'block';
      isCameraOn = true;
      toggleCameraBtn.textContent = 'Cerrar cámara';
      /*setInterval(()=>{
          const xSize = canvas.width = videoElement.videoWidth;
          const ySize = canvas.height = videoElement.videoHeight;
          const context = canvas.getContext('2d');
      
      
          context.drawImage(videoElement, 0, 0, xSize, ySize);
      },100);*/
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }
});

document.getElementById("resetB").addEventListener('click', ()=>{
  do {
    aName = prompt("Nombre del nuevo participante:");
    if(aName == null) return;
  }while (aName == '');
  console.log(aName);

  capturedImages = [];
  photosT.innerText = "0";
  emotionS.value = "a";
  //canvas.style.display='none';
  //aName = prompt("Nombre del nuevo participante:");
});

measurementBtn.addEventListener('click', async () => {
  console.time('Total time');
  
  if (isCameraOn && videoElement.readyState >= 2) {
    //canvas.style.display='block';
    const xSize = canvas.width = videoElement.videoWidth;
    const ySize = canvas.height = videoElement.videoHeight;
    const context = canvas.getContext('2d');
    //
    //
    context.drawImage(videoElement, 0, 0, xSize, ySize);
    // 
    console.log(`Size is ${xSize} and ${ySize}`);
    //
    /*const imageData = canvas.toDataURL('image/png');
    capturedImages.push([imageData, emotionS.value]);
    photosT.innerText = String(capturedImages.length);*/
    setTimeout(() => {
      console.time('toURL');
      try {
        const imageData = canvas.toDataURL('image/png');
        capturedImages.push([imageData, emotionS.value]);
        photosT.innerText = String(capturedImages.length);
      } catch (error) {
        console.error('Error generating the image data URL:', error);
      }
      console.timeEnd('toURL');
    }, 0); // Delay by 0ms to yield to the browser
    
    //
    /*if (capturedImages.length === 10) {
      alert('Captured 10 images, ready to download!');
      }*/
     //videoElement.style.visibility="hidden";
     
  }else{
    alert("Primero abra la cámara");
  }
  console.timeEnd('Total time');
  //Media de 91 en pc
  //
});
      
/*downloadBtn.addEventListener('click', () => {
  if (capturedImages.length === 0) {
    alert('No images to download!');
    return;
  }
  //
  const zip = new JSZip();
  capturedImages.forEach((photo, index) => {
    const imgData = photo[0].split(',')[1]; // Remove data URL prefix
    myNumber++; 
    localStorage.setItem('myNumber', myNumber);
    zip.file(`${String(myNumber)}_${photo[1]}_${index + 1}.png`, imgData, { base64: true });
  });
  //
  zip.generateAsync({ type: 'blob' })
    .then(content => {
        saveAs(content, `images_${aName}.zip`);
    })
    .catch(err => {
        console.error('Failed to generate zip:', err);
    });
});*/
downloadBtn.addEventListener('click', () => {
  if (capturedImages.length === 0) {
      alert('No images to download!');
      return;
  }

  capturedImages.forEach((photo, index) => {
      const a = document.createElement('a');
      a.href = photo[0];
      myNumber++;
      localStorage.setItem('myNumber', myNumber);
      a.download = `images_${aName}_${String(myNumber)}_${photo[1]}_${index + 1}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  });
});