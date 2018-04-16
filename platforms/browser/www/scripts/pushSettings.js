var request = new XMLHttpRequest();
var dateToday = new Date().toISOString().slice(0, 10);

var myTarget = {
    "Date": "",
    "ActiveMinutes": null,
    "Steps": null,
    "DeviceId": ""
}

var todaysTarget = {
    "Date": "",
    "ActiveMinutes": null,
    "Steps": null,
    "DeviceId": ""
}

var deviceId = null;

window.onload = function () {
    document.getElementById('btnPlusMinutes').addEventListener('click', addToInputMinutes);
    document.getElementById('btnMinusMinutes').addEventListener('click', substractFromInputMinutes);
    document.getElementById('btnPlusSteps').addEventListener('click', addToInputSteps);
    document.getElementById('btnMinusSteps').addEventListener('click', substractFromInputSteps);
    document.getElementById("pushToDB").addEventListener('click', pushtoDB);
    var x = parseInt(document.getElementById("activeMinutesInput").value);
    var y = parseInt(document.getElementById("stepsInput").value);
    myTarget.ActiveMinutes = x;
    myTarget.Steps = y;
    if (document.readyState === "complete") {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
}



// REQUEST NAAR WINDOW ONLOAD VERHUIZEN. VANUIT IF DOCUMENT READYSTATE IS COMPLETE FUNCTIE AANROEP PROCESSREQUEST
function onDeviceReady() {
    //write your function body here
    deviceId = "GVD"; //device.uuid;
    request.addEventListener("readystatechange", processRequest, false);
    request.open('GET', "http://moxwebservice.azurewebsites.net/api/Target?Id=" + dateToday + "&DeviceId=" + deviceId, true);
    request.send();



    document.getElementById("uuidtest").innerHTML = device.uuid;
    // console.log(device.uuid);

    myTarget.Date = new Date().toISOString().slice(0, 10);
    myTarget.DeviceId = deviceId;
    makeTheCall();
}


function processRequest(e) {
    if (request.readyState == 4 && request.status == 200) {
        var response = JSON.parse(request.responseText);
        if (response.length == 1) {
            myTarget.Date = response.Date;
            myTarget.ActiveMinutes = response.ActiveMinutes;
            myTarget.Steps = response.Steps;
            myTarget.DeviceId = response.DeviceId;
        }
    }
}

function addToInputMinutes() {
    myTarget.ActiveMinutes = myTarget.ActiveMinutes + 50;
    document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
    console.log(myTarget);
}

function substractFromInputMinutes() {
    myTarget.ActiveMinutes = myTarget.ActiveMinutes - 50;
    document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
    console.log(myTarget);
}

function addToInputSteps() {
    myTarget.Steps = myTarget.Steps + 50;
    document.getElementById("stepsInput").value = myTarget.Steps;
    console.log(myTarget);
}

function substractFromInputSteps() {
    myTarget.Steps = myTarget.Steps - 50;
    document.getElementById("stepsInput").value = myTarget.Steps;
    console.log(myTarget);
}

function pushtoDB() {
    myTarget.Date = new Date().toISOString().slice(0, 10);
    // myTarget.DeviceId = "SamsungS8Wesley";
    // myTarget.DeviceId = "GVD";
    myTarget.DeviceId = deviceId;
    console.log(myTarget);
    makeTheCall();
    // window.location.reload()
}

function makeTheCall() {
    $.ajax({
        async: true,
        url: 'http://moxwebservice.azurewebsites.net/api/Target?Id=' + myTarget.Date + '&DeviceId=' + myTarget.DeviceId,
        // url: 'http://localhost:61497/api/Target?Id=' + myTarget.Date + '&DeviceId=' + myTarget.DeviceId,        
        type: 'PUT',
        data: myTarget,
        success: function () {
        }
    });
}


