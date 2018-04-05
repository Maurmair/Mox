$(document).ready(function() {
    $.ajax({
        url: "http://localhost:61497/api/Device"
    }).then(function(data) {
       $('.greeting-id').append(data.DeviceId);
       $('.greeting-content').append(data.CoupledDevice);
    });
});