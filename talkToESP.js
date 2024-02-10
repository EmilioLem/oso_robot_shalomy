 /*
  //const {makeHttpRequest} = require('./talkToESP.js');
  // Example usage:
  const ipAddress = '10.10.56.72'; // Replace with your ESP8266's IP address
  const requestPath = '/json'; // Replace with the desired path
  makeHttpRequest(ipAddress, requestPath, (error, data) => {
      if (error) {
          console.error('Error making HTTP request:', error.message);
      } else {
          console.log('GPIO 5:', data.gpio5);
          console.log('GPIO 4:', data.gpio4);
      }
  });
*/

const http = require('http');

function makeHttpRequest(ipAddress, path, callback) {
  const options = {
    hostname: ipAddress,
    port: 80,
    path: path,
    method: 'GET',
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        callback(null, json); // Call the callback with the JSON data
      } catch (error) {
        callback(error, null); // Call the callback with the error
      }
    });
  });

  req.on('error', (error) => {
    callback(error, null); // Call the callback with the error
  });

  req.end();
}



module.exports = {
    makeHttpRequest,
}