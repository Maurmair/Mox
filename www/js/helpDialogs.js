
function showGPSAlert() {
    navigator.notification.alert(
        'Dit is het GPS scherm. Klik op "Ga naar Locatiescherm om GPS aan te zetten. Ga vervolgens met de "back" knop terug naar de applicatie"',  // message
        alertDismissed,         // callback
        'GPS',            // title
        'Ik snap het'           // buttonName
    );
}
function showMoxAlert() {
    navigator.notification.alert(
        'Op dit scherm wordt de meegeleverde MOX gekozen. Kijk op de achterkant van MOX voor het gelijke nummer.',  // message
        alertDismissed,         // callback
        'MOX Selecteren',       // title
        'Ik snap het'           // buttonName
    );
}

function showBluetoothAlert() {
    navigator.notification.alert(
        'Dit is het Bluetoothscherm. Klik op de knop "Zet Bluetooth Aan"',  // message
        alertDismissed,         // callback
        'Bluetooth',            // title
        'Ik snap het'           // buttonName
    );
}

function alertDismissed() {
    // do something
}
