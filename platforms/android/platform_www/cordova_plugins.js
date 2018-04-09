cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-device-name.DeviceName",
    "file": "plugins/cordova-plugin-device-name/www/device-name.js",
    "pluginId": "cordova-plugin-device-name",
    "clobbers": [
      "cordova.plugins.deviceName"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-device-name": "1.3.2"
};
// BOTTOM OF METADATA
});