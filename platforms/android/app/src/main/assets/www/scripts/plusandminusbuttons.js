window.onload = function(){
    document.getElementById('btnPlusMinutes').addEventListener('click', addToInputMinutes);    
    document.getElementById('btnMinusMinutes').addEventListener('click', substractFromInputMinutes);    
    document.getElementById('btnPlusSteps').addEventListener('click', addToInputSteps);    
    document.getElementById('btnMinusSteps').addEventListener('click', substractFromInputSteps); 
    document.getElementById("pushToDB").addEventListener('click', pushtoDB());   
    
}

function addToInputMinutes(){    
    var startNumber = parseInt(document.getElementById("activeMinutesInput").value);
    console.log(startNumber);
    startNumber = startNumber + 50;
    document.getElementById("activeMinutesInput").value = startNumber;
}

function substractFromInputMinutes(){
    var startNumber = parseInt(document.getElementById("activeMinutesInput").value);
    console.log(startNumber);
    startNumber = startNumber - 50;
    document.getElementById("activeMinutesInput").value = startNumber;
}


function addToInputSteps(){    
    var startNumber = parseInt(document.getElementById("stepsInput").value);
    console.log(startNumber);
    startNumber = startNumber + 50;
    document.getElementById("stepsInput").value = startNumber;
}

function substractFromInputSteps(){
    var startNumber = parseInt(document.getElementById("stepsInput").value);
    console.log(startNumber);
    startNumber = startNumber - 50;
    document.getElementById("stepsInput").value = startNumber;
}

function pushtoDB(){
    var todayDate = new Date().toISOString().slice(0,10);
    var uniqueDevice = "SamsungS8Wesley"
    var activeMinutes = document.getElementById("activeMinutesInput").value;
    var steps = document.getElementById("stepsInput").value;
    $.ajax({
        url: 'http://moxbackend20180406094815.azurewebsites.net/api/Target/' + todayDate,
        type: 'POST',
        data: {
            "Date": todayDate,
            "ActiveMinutes": activeMinutes,
            "Steps": steps,
            "DeviceId": uniqueDevice
        },
        success: function(){

        }
    });
}