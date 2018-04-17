var requestToday = new XMLHttpRequest();
var requestYesterday = new XMLHttpRequest();
var dateToday = new Date().toISOString().slice(0, 10);
var dateYesterday = yesterday.toISOString().slice(0, 10);


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
    // var x = parseInt(document.getElementById("activeMinutesInput").value);
    // var y = parseInt(document.getElementById("stepsInput").value);
    // deviceId = "GVD"; //device.uuid;
    // myTarget.ActiveMinutes = x;
    // myTarget.Steps = y;
    if (document.readyState === "complete") {
        // myTarget.DeviceId = deviceId;
        
        document.addEventListener("deviceready", onDeviceReady, false);
        
    }
}



// REQUEST NAAR WINDOW ONLOAD VERHUIZEN. VANUIT IF DOCUMENT READYSTATE IS COMPLETE FUNCTIE AANROEP PROCESSREQUEST
function onDeviceReady() {
    //write your function body here
    deviceId = device.uuid;
    
    // deviceId = "SamsungS8Wesley";
    
    myTarget.DeviceId = deviceId;
    	
    // myTarget.DeviceId = "609569da5ee53f80";
    requestToday.addEventListener("readystatechange", processRequestToday, false);
    requestToday.open('GET', "http://moxwebservice.azurewebsites.net/api/Target?Id=" + dateToday + "&DeviceId=" + myTarget.DeviceId, true);
    requestToday.send();
    document.getElementById("uuidtest").innerHTML = device.uuid;
    // console.log(device.uuid);
    myTarget.Date = new Date().toISOString().slice(0, 10);
    
    // makeTheCall();
}


function processRequestToday(e) {
    if (requestToday.readyState == 4 && requestToday.status == 200) {
        var responseToday = JSON.parse(requestToday.responseText);
        if (responseToday != null) {
            // myTarget.Date = responseToday.Date;
            myTarget.ActiveMinutes = responseToday.ActiveMinutes;
            myTarget.Steps = responseToday.Steps;
            // myTarget.DeviceId = responseToday.DeviceId;
            document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
            document.getElementById("stepsInput").value = myTarget.Steps;
            document.getElementById("toonDoel").innerHTML = myTarget.ActiveMinutes;
        } else if (responseToday == null) {
            requestYesterday.addEventListener("readystatechange", processRequestYesterday, false);
            requestYesterday.open('GET', "http://moxwebservice.azurewebsites.net/api/Target?Id=" + dateYesterday + "&DeviceId=" + myTarget.DeviceId, true);
            requestYesterday.send();
        }
    }
}

function processRequestYesterday(e) {
    if (requestYesterday.readyState == 4 && requestYesterday.status == 200) {
        var responseYesterday = JSON.parse(requestYesterday.responseText);
        if (responseYesterday != null) {
            // myTarget.Date = responseYesterday.Date;
            myTarget.ActiveMinutes = responseYesterday.ActiveMinutes;
            myTarget.Steps = responseYesterday.Steps;
            // myTarget.DeviceId = responseYesterday.DeviceId;
            document.getElementById("toonDoel").innerHTML = myTarget.ActiveMinutes;
            makeTheCall();
        } else if (responseYesterday == null) {
            myTarget.Date = dateToday;
            myTarget.ActiveMinutes = 50;
            myTarget.Steps = 50;
            myTarget.DeviceId = deviceId;
            document.getElementById("toonDoel").innerHTML = myTarget.ActiveMinutes;
            makeTheCall();
        }
        document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
        document.getElementById("stepsInput").value = myTarget.Steps;
        document.getElementById("toonDoel").innerHTML = myTarget.ActiveMinutes;
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
    // myTarget.Date = new Date().toISOString().slice(0, 10);
    // myTarget.DeviceId = "SamsungS8Wesley";
    // myTarget.DeviceId = "GVD";
    // myTarget.DeviceId = deviceId;
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


