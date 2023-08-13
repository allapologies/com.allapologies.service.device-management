import { Device } from '../domain/device.entity';

export class DeviceDTO {
  id: string;
  name: string;
  type: string;
  owner: string;
  batteryStatus: number;

  static from(device: Device) {
    const deviceDTO = new DeviceDTO();
    deviceDTO.id = device.id;
    deviceDTO.name = device.name;
    deviceDTO.type = device.type;
    deviceDTO.owner = device.owner;
    deviceDTO.batteryStatus = device.batteryStatus;
    return deviceDTO;
  }
}
