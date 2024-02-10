//https://www.w3schools.com/nodejs/nodejs_raspberrypi_led_pushbutton.asp

// npx lt -p 8080


var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var ip = require('ip');
const querystring = require('querystring');
const nodemailer = require('nodemailer');



const portS = 8080;
http.createServer((req, res) => {
    
    if(req.method == 'GET' && req.url == '/'){
        fs.readFile('./index.html', function(err, data) {
            if(err){
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('The file does not exist, URL might be incorrect');
                console.error('Error reading file:', err);
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
    
    else if(req.method == 'GET' && req.url.slice(0,14) == '/webResources/'){
        fs.readFile(`.${req.url}`, function(err, data){
            if(err){
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('The file does not exist, URL might be incorrect');
                console.error('Error reading file:', err);
            }else{
                const extname = path.extname(req.url);
                let contentType = 'text/plain';
                if (extname === '.html') {
                    contentType = 'text/html';
                } else if (extname === '.css') {
                    contentType = 'text/css';
                } else if (extname === '.js') {
                    contentType = 'application/javascript';
                }
                res.writeHead(200, {'Content-Type': contentType});
                res.write(data);
                res.end();
            }
        });
    }
    else if (req.method == 'GET' && req.url == '/talk') {
        const parsedUrl = url.parse(req.url, true);
        const queryData = parsedUrl.query;
        
        if (queryData && queryData.data) {
            const receivedData = querystring.unescape(queryData.data);
            
           
           console.log('Received data:', receivedData);
           res.writeHead(200, { 'Content-Type': 'text/plain' });
           res.end('Data received: ' + receivedData);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request: Missing data parameter');
        }
    }
    
    else if(req.method == 'POST' && req.url == '/result'){    
        let data = '';
        
        req.on('data', (chunk)=>{
            data += chunk;
        });

    req.on('end', ()=>{
      let receivedData = JSON.parse(data);
      
      const date = new Date().toDateString(); // Current date in string format
      const time = new Date().toLocaleTimeString(); 
      const csvData = `${receivedData.name.replace(/,/g, "_")},${date},${time},${receivedData.theDiagnostic.replace(/,|\n/g, "_")},${receivedData.theRawAnswers.replace(/,|\n/g, "_")}\n`;

      const filePath = './webResources/data.csv'; //Or something else, more secur
      if (!fs.existsSync(filePath)) {
          const header = 'Name,Date,Time,Diagnostic,RawAnswers\n';
          fs.writeFileSync(filePath, header);
      }

      // Append the data to the file
      fs.appendFileSync(filePath, csvData);
      

      console.log(`Primero es ${JSON.parse(receivedData.theRawAnswers)[0]} luego es ${JSON.parse(receivedData.theRawAnswers)[1]}`);
      res.end('Data received sucessfully');
    });
  }
  else if(req.method == 'POST' && req.url == '/ipAdress'){
    let data = '';
    req.on('data', (chunk)=>{
      data += chunk;
    });

    req.on('end', ()=>{
      let theESPip = JSON.parse(data); //Better converting it to proper string
      console.log(`We received the ip: ${theESPip} and it is ${typeof(theESPip)}`);
      //setInterval(constantPing, 1000)
      res.end('Data received sucessfully');
    });
    
  }

  

  
  else {
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(portS, () => {
  console.log('Server running at http://' + ip.address() + ':' + portS + '/');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: 'emilio21lemus@gmail.com',
    pass: 'myei botr wixf bqou' 
  }
});
const mailOptions = {
  from: 'emilio21lemus@gmail.com',
  to: 'emilio21lemus@gmail.com',  
  subject: 'Sending Email using Node.js',
  text: 'That was easy!' 
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});






//lt -p 8080

//ssh -R 80:localhost:8080 serveo.net

//ssh -R 80:localhost:8080 localhost.run

//Maybe someday give it a try: https://localxpose.io/docs#start-your-first-tunnel