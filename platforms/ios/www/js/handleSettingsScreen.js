window.onload = function () {
    document.getElementById('btnPlusMinutes').addEventListener('click', addToInputMinutes);
    document.getElementById('btnMinusMinutes').addEventListener('click', substractFromInputMinutes);
    document.getElementById('btnPlusSteps').addEventListener('click', addToInputSteps);
    document.getElementById('btnMinusSteps').addEventListener('click', substractFromInputSteps);
    document.getElementById("pushToDB").addEventListener('click', pushtoDB);
    myTarget.Date = new Date().toISOString().slice(0, 10);
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

function addToInputMinutes() {
    myTarget.ActiveMinutes = myTarget.ActiveMinutes + 50;
    document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
    document.getElementById("toonDoelActieveMinuten").innerHTML = myTarget.ActiveMinutes;   
    updateProgressBar();   
    console.log(myTarget);
}

function substractFromInputMinutes() {
    myTarget.ActiveMinutes = myTarget.ActiveMinutes - 50;
    document.getElementById("activeMinutesInput").value = myTarget.ActiveMinutes;
    document.getElementById("toonDoelActieveMinuten").innerHTML = myTarget.ActiveMinutes; 
    updateProgressBar();  
    console.log(myTarget);
}

function addToInputSteps() {
    myTarget.Steps = myTarget.Steps + 50;
    document.getElementById("stepsInput").value = myTarget.Steps;
    document.getElementById("toonDoelStappen").innerHTML = myTarget.Steps;
    updateProgressBar();  
    console.log(myTarget);
}

function substractFromInputSteps() {
    myTarget.Steps = myTarget.Steps - 50;
    document.getElementById("stepsInput").value = myTarget.Steps;
    document.getElementById("toonDoelStappen").innerHTML = myTarget.Steps;
    updateProgressBar();  
    console.log(myTarget);
}

function pushtoDB() {
    // myTarget.Date = new Date().toISOString().slice(0, 10);
    // myTarget.DeviceId = "SamsungS8Wesley";
    // myTarget.DeviceId = "GVD";
    // myTarget.DeviceId = deviceId;
    console.log(myTarget);
    updateProgressBar();  
    makeTheCall();
    
    // window.location.reload()
}