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