window.onload = function(){
    document.getElementById('btnPlusMinutes').addEventListener('click', addToInputMinutes);    
    document.getElementById('btnMinusMinutes').addEventListener('click', substractFromInputMinutes);    
    document.getElementById('btnPlusSteps').addEventListener('click', addToInputSteps);    
    document.getElementById('btnMinusSteps').addEventListener('click', substractFromInputSteps);    
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