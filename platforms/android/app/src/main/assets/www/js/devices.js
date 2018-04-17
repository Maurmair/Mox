var request = new XMLHttpRequest();

request.addEventListener("readystatechange", processRequest, false);
request.open('GET', "http://moxbackend20180406094815.azurewebsites.net/api/Device", true);

request.send();
function processRequest(e){
    if (request.readyState == 4 && request.status == 200) {
        var response = JSON.parse(request.responseText);
        if (response.length > 0) {
            for (var i = 0; i < response.length; i++){
                printObject(response[i]);
            }
        }
    }
}

function printObject(jsonObject){
    $("#testapi ul").append("<li>Device Naam: " +jsonObject.DeviceId + "</li>");
    $("#testapi ul").append("<li>Coupled Device: " + jsonObject.CoupledDevice + "</li>");                    
}