/*(async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/models');
    
    const image = document.querySelector('img');
    const canvas = faceapi.createCanvasFromMedia(image);
    const detection = await faceapi.detectAllFaces(image)
                                    .withFaceLandmarks()
                                    .withFaceExpressions();

    const dimensions = {
        width: image.width,
        height: image.height
    };

    const resizedDimensions = faceapi.resizeResults(detection, dimensions);

    document.body.append(canvas);

    faceapi.draw.drawDetections(canvas, resizedDimensions);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDimensions);
    faceapi.draw.drawFaceExpressions(canvas, resizedDimensions);
})();*/

// Load face-api models from the /models directory
async function loadModels() {
    const MODEL_URL = './webResources/models';//./webResources/
    await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  }
  
  // Set up the camera using getUserMedia
  async function setupCamera() {
    const video = document.getElementById('video');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
      video.srcObject = stream;
      return new Promise((resolve) => {
        video.onloadedmetadata = () => {
          resolve(video);
        };
      });
    } catch (err) {
      console.error('Error accessing the camera: ', err);
      alert('Unable to access the camera.');
    }
  }
  
  // Continuously detect faces and emotions from the video stream
  async function onPlay(video) {
    // Create a canvas overlay from the video element
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
  
    // Match the dimensions of the canvas to the video
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
  
    // Recursive detection function
    async function detectFrame() {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.SsdMobilenetv1Options())
        .withFaceLandmarks()
        .withFaceExpressions();
    
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
    
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    
      detections.forEach((detection) => {
        console.log(detection.expressions);
      });
    
      // Call the function again when the current one is done
      setTimeout(detectFrame); // no delay means it runs as soon as ready
    }

    //// Set an interval to process frames continuously (every 100ms)
    //setInterval(async () => {
    //  const detections = await faceapi
    //    .detectAllFaces(video, new faceapi.SsdMobilenetv1Options())
    //    .withFaceLandmarks()
    //    .withFaceExpressions();
    //  
    //  // Resize results to match the display size
    //  const resizedDetections = faceapi.resizeResults(detections, displaySize);
    //  
    //  // Clear the canvas and draw the detections
    //  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    //  faceapi.draw.drawDetections(canvas, resizedDetections);
    //  faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    //  faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    //  
    //  // Log the emotion probabilities for each detected face
    //  detections.forEach((detection) => {
    //    console.log(detection.expressions);
    //  });
    //}, 100);
    detectFrame();

  }
  
  // Initialize the application: load models, set up the camera, and start detection
  async function init() {
    await loadModels();
    const video = await setupCamera();
    video.play();
    video.addEventListener('playing', () => onPlay(video));
  }
  
  init();

  
//Huge shoutout to him... https://github.com/flowforfrank/faceapi/tree/master