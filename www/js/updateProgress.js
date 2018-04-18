function updateProgressBar(){
    document.getElementById("progressActiveMinutes").value = parseFloat(myInputData.ActiveMinutesReached).toFixed(2);
    document.getElementById("progressActiveMinutes").max = parseFloat(myTarget.ActiveMinutes).toFixed(2);
    document.getElementById("progressSteps").value = parseFloat(myInputData.StepsReached).toFixed(2);
    document.getElementById("progressSteps").max = parseFloat(myTarget.Steps).toFixed(2);

    
}
