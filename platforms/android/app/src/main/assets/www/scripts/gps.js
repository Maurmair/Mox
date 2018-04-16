document.addEventListener('deviceready', function enableGPS() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');

    document.getElementById('engps').addEventListener("click", enableGPS);

    function enableGPS() {
        cordova.plugins.diagnostic.isLocationEnabled(function (enabled) {
            console.log("Location setting is " + (enabled ? "enabled" : "disabled"));
            alert("Location Services On");
        }, function (error) {
            alert("Location Services Off");
            console.error("The following error occurred: " + error);
        });
    }
});

