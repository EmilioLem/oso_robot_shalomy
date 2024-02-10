// Replace with the range of local IP addresses you want to check
const startIp = "10.10.56.0"//192.168.0.1";
const endIp = "10.10.56.255";//"192.168.0.255";

const validationResults = document.getElementById("validationResults");

function checkServer(ip) {
    fetch(`http://${ip}/isThisTheServer`)
        .then(response => response.json())
        .then(data => {
            const result = data.response === "yes, this is the server" ? "Yes" : "No";
            const listItem = document.createElement("li");
            listItem.textContent = `IP: ${ip}, Response: ${result}`;
            validationResults.appendChild(listItem);
        })
        .catch(error => {
            const listItem = document.createElement("li");
            listItem.textContent = `IP: ${ip}, Response: Error (${error.message})`;
            validationResults.appendChild(listItem);
        });
}

function pingLocalServers() {
    const ipPartsStart = startIp.split(".").map(Number);
    const ipPartsEnd = endIp.split(".").map(Number);

    for (let a = ipPartsStart[0]; a <= ipPartsEnd[0]; a++) {
        for (let b = ipPartsStart[1]; b <= ipPartsEnd[1]; b++) {
            for (let c = ipPartsStart[2]; c <= ipPartsEnd[2]; c++) {
                for (let d = ipPartsStart[3]; d <= ipPartsEnd[3]; d++) {
                    const ip = `${a}.${b}.${c}.${d}`;
                    checkServer(ip);
                    console.log("It tried to check, maybe");
                }
            }
        }
    }
    console.log("Gets into ping function");
    console.log(ipPartsStart);
    console.log(ipPartsEnd);
}

pingLocalServers();
console.log("Well, the file runs... something :)");

// This is just a web test

function checkServer(ip) {
    console.log("At least the function is called properly...");
    fetch(`http://${ip}/isThisTheServer`)
        .then(response => response.json())
        .then(data => {
            const result = data.response === "yes, this is the server" ? "Yes" : "No";
            console.log(result); // Fix the typo here
        })
        .catch(error => {
            console.log("error");
        });
}

checkServer("10.10.56.195");
