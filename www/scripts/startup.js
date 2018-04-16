var request = new XMLHttpRequest();
var dateToday = new Date().toISOString().slice(0, 10);

var myTargetStartup = {
    "Date": "",
    "ActiveMinutes": null,
    "Steps": null,
    "DeviceId": ""
}

window.onload = function(){
    if(document.readyState === "complete") {
        document.addEventListener("deviceready",onDeviceReady,false); 
    }
}
function onDeviceReady(){    
    var deviceId = device.uuid;    
}

request.addEventListener("readystatechange", processRequest, false);
request.open('GET', "http://moxbackend20180406094815.azurewebsites.net/api/Target?Id=" + dateToday + "&DeviceId=" + deviceId, true);
request.send();

function processRequest(e){
    if (request.readyState == 4 && request.status == 200) {
        var response = JSON.parse(request.responseText);
        if (response.length >= 0) {
            
        }
    }
}



