var http = new XMLHttpRequest();

var apiKey, deviceId;

$(".form-inline").submit(function(){
    getCredentials();
    return false;
});

function getCredentials(){
    apiKey = document.forms["credentialsForm"]["apiKey"].value;
    deviceId = document.forms["credentialsForm"]["deviceId"].value;
    if(apiKey == "" || deviceId == ""){
        alert("Please enter an API KEY and a Device ID");
    }
    else{
        alert("Click to Control");
    }
}

function LedOn(){     //Pin 1 High
    http.open("GET","https://cloud.boltiot.com/remote/"+apiKey+"/digitalWrite?pin=1&state=HIGH&deviceName="+deviceId,false);
    http.send();

}

function LedOff(){    // Pin 1 Low
    http.open("GET","https://cloud.boltiot.com/remote/"+apiKey+"/digitalWrite?pin=1&state=LOW&deviceName="+deviceId,false);
    http.send();
}

function Servo25(){ // Pin 2 - 25
    http.open("GET","https://cloud.boltiot.com/remote/"+apiKey+"/servoWrite?pin=2&value=25&deviceName="+deviceId,false);
    http.send();
}

function Servo90(){  // Pin 2 - 90
    http.open("GET","https://cloud.boltiot.com/remote/"+apiKey+"/servoWrite?pin=2&value=90&deviceName="+deviceId,false);
    http.send();
}

function Servo155(){   // Pin 2 - 155
    http.open("GET","https://cloud.boltiot.com/remote/"+apiKey+"/servoWrite?pin=2&value=155&deviceName="+deviceId,false);
    http.send();
}

function Servo45(){  // Pin 3 - 45
    http.open("GET","https://cloud.boltiot.com/remote/"+apiKey+"/servoWrite?pin=3&value=45&deviceName="+deviceId,false);
    http.send();
}

function Servo135(){  // Pin 3 - 135
    http.open("GET","https://cloud.boltiot.com/remote/"+apiKey+"/servoWrite?pin=3&value=135&deviceName="+deviceId,false);
    http.send();
}