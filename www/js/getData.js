var requestToday = new XMLHttpRequest();
var requestYesterday = new XMLHttpRequest();
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

// deviceId = "SamsungS8Wesley";
myTarget.DeviceId = deviceId;

// myTarget.DeviceId = "609569da5ee53f80";
requestToday.addEventListener("readystatechange", processRequestToday, false);
requestToday.open('GET', "http://moxwebservice.azurewebsites.net/api/Target?Id=" + dateToday + "&DeviceId=" + myTarget.DeviceId, true);
requestToday.send();
document.getElementById("uuidtest").innerHTML = deviceId;
// console.log(device.uuid);


// makeTheCall();

var dateToday = new Date().toISOString().slice(0, 10);

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
            document.getElementById("toonDoelActieveMinuten").innerHTML = myTarget.ActiveMinutes;
            document.getElementById("toonDoelStappen").innerHTML = myTarget.Steps;
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
            document.getElementById("toonDoelActieveMinuten").innerHTML = myTarget.ActiveMinutes;
            document.getElementById("toonDoelStappen").innerHTML = myTarget.Steps;
            makeTheCall();
        } else if (responseYesterday == null) {
            myTarget.Date = dateToday;
            myTarget.ActiveMinutes = 50;
            myTarget.Steps = 50;
            myTarget.DeviceId = deviceId;
            document.getElementById("toonDoelActieveMinuten").innerHTML = myTarget.ActiveMinutes;
            document.getElementById("toonDoelStappen").innerHTML = myTarget.Steps;
            makeTheCall();
        }
        document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
        document.getElementById("stepsInput").value = myTarget.Steps;
        document.getElementById("toonDoelActieveMinuten").innerHTML = myTarget.ActiveMinutes;
        document.getElementById("toonDoelStappen").innerHTML = myTarget.Steps;
    }
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
