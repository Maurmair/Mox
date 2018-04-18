var getInputDataRequest = new XMLHttpRequest();
function getInputData(){
    getInputDataRequest.addEventListener("readystatechange", processRequest, false);
    getInputDataRequest.open('GET', "http://moxwebservice.azurewebsites.net/api/InputData?Id=" + myInputData.Date + "&DeviceId=" + myInputData.DeviceId, true);
    getInputDataRequest.send();
}

function processRequest(e) {
    if (getInputDataRequest.readyState == 4 && getInputDataRequest.status == 200) {
        var responsee = JSON.parse(getInputDataRequest.responseText);
        if (responsee != null) {
            myInputData.ActiveMinutesReached = responsee.ActiveMinutesReached;
            myInputData.StepsReached = responsee.StepsReached;
            document.getElementById("toonBehaaldeActieveMinuten").innerHTML = myInputData.ActiveMinutesReached;
            document.getElementById("toonBehaaldeStappen").innerHTML = myInputData.StepsReached;
        } else if (responsee == null) {
            myInputData.ActiveMinutesReached = 0;
            myInputData.StepsReached = 0;
            document.getElementById("toonBehaaldeActieveMinuten").innerHTML = myInputData.ActiveMinutesReached;
            document.getElementById("toonBehaaldeStappen").innerHTML = myInputData.StepsReached;
            updateOrSetInputData();
        }
    }
}

function updateOrSetInputData() {
    $.ajax({
        async: true,
        url: 'http://moxwebservice.azurewebsites.net/api/InputData?Id=' + myInputData.Date + '&DeviceId=' + myInputData.DeviceId,
        // url: 'http://localhost:61497/api/Target?Id=' + myTarget.Date + '&DeviceId=' + myTarget.DeviceId,        
        type: 'PUT',
        data: myInputData,
        success: function () {
        }
    });
}