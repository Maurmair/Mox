// var getInputDataRequest = new XMLHttpRequest();
// var myInputData = {
//     "Date": "",
//     "ActiveMinutesReached": null,
//     "StepsReached": null,
//     "DeviceId": ""
// }

// myInputData.DeviceId = apparaatNaam;
// document.getElementById("toonDeviceId").innerHTML = myInputData.deviceId;

// var dateToday = new Date().toISOString().slice(0, 10);
// myInputData.Date = dateToday;

// getInputDataRequest.addEventListener("readystatechange", processRequest, false);
// getInputDataRequest.open('GET', "http://moxwebservice.azurewebsites.net/api/InputData?Id=" + myInputData.Date + "&DeviceId=" + myInputData.DeviceId, true);
// getInputDataRequest.send();

// function processRequest(e) {
//     if (getInputDataRequest.readyState == 4 && getInputDataRequest.status == 200) {
//         var responsee = JSON.parse(getInputDataRequest.responseText);
//         if (responsee != null) {
//             myInputData.ActiveMinutesReached = responsee.ActiveMinutesReached;
//             myInputData.StepsReached = responsee.StepsReached;
//             document.getElementById("toonBehaaldeActieveMinuten").innerHTML = myInputData.ActiveMinutesReached;
//             document.getElementById("toonBehaaldeStappen").innerHTML = myInputData.StepsReached;
//             // myTarget.DeviceId = response.DeviceId;
//            // document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
//             //document.getElementById("stepsInput").value = myTarget.Steps;
//             //document.getElementById("toonDoelActieveMinuten").innerHTML = myTarget.ActiveMinutes;
//             //document.getElementById("toonDoelStappen").innerHTML = myTarget.Steps;
//         } else if (responsee == null) {
//             myInputData.ActiveMinutesReached = 0;
//             myInputData.StepsReached = 0;
//             document.getElementById("toonBehaaldeActieveMinuten").innerHTML = myInputData.ActiveMinutesReached;
//             document.getElementById("toonBehaaldeStappen").innerHTML = myInputData.StepsReached;
//             updateOrSetInputData();
//         }
//     }
// }

// function updateOrSetInputData() {
//     $.ajax({
//         async: true,
//         url: 'http://moxwebservice.azurewebsites.net/api/InputData?Id=' + myInputData.Date + '&DeviceId=' + myInputData.DeviceId,
//         // url: 'http://localhost:61497/api/Target?Id=' + myTarget.Date + '&DeviceId=' + myTarget.DeviceId,        
//         type: 'PUT',
//         data: myInputData,
//         success: function () {
//         }
//     });
// }