import {DoorSensorPort} from "./lib/DoorSensorPort";
import {SwitchPort} from "./lib/SwitchPort";
import {GPIOGarageDoorAccessory} from "./lib/GPIOGarageDoorAccessory";
import {DoorStateExtension} from "./lib/DoorStateExtension";

declare var module;

module.exports = function (homebridge) {
  var exportTypes = {
    Accessory: homebridge.hap.Accessory,
    Service: homebridge.hap.Service,
    Characteristic: homebridge.hap.Characteristic,
    uuid: homebridge.hap.uuid,
  };

  DoorStateExtension.init(exportTypes);
  DoorSensorPort.init(exportTypes);
  SwitchPort.init(exportTypes);
  GPIOGarageDoorAccessory.init(exportTypes);

  homebridge.registerAccessory("homebridge-gpio-garagedoor", "GPIOGarageDoor", GPIOGarageDoorAccessory);
};