document.getElementById('simulateMinusSteps').addEventListener('click', simulateMinusSteps);
document.getElementById('simulatePlusSteps').addEventListener('click', simulatePlusSteps);
function simulateMinusSteps(){
    myInputData.StepsReached =  myInputData.StepsReached - 10;
    document.getElementById("toonBehaaldeStappen").innerHTML = myInputData.StepsReached;
    updateProgressBar(); 
    updateOrSetInputData();
}

function simulatePlusSteps(){
    myInputData.StepsReached =  myInputData.StepsReached + 10;
    document.getElementById("toonBehaaldeStappen").innerHTML = myInputData.StepsReached;
    updateProgressBar(); 
    updateOrSetInputData();
}