document.getElementById('simulateMinusMinutes').addEventListener('click', simulateMinusMinutes);
document.getElementById('simulatePlusMinutes').addEventListener('click', simulatePlusMinutes);


function simulateMinusMinutes(){
    myInputData.ActiveMinutesReached =  myInputData.ActiveMinutesReached - 10;
    document.getElementById("toonBehaaldeActieveMinuten").innerHTML = myInputData.ActiveMinutesReached;
    updateProgressBar(); 
    updateOrSetInputData();
}

function simulatePlusMinutes(){
    myInputData.ActiveMinutesReached =  myInputData.ActiveMinutesReached + 10;
    document.getElementById("toonBehaaldeActieveMinuten").innerHTML = myInputData.ActiveMinutesReached;
    updateProgressBar(); 
    updateOrSetInputData();
}


