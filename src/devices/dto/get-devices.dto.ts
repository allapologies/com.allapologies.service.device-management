import { DeviceDTO } from './device.dto';

export class GetDevicesDTO {
  devices: DeviceDTO[];

  static from(devices: DeviceDTO[]) {
    const getDevicesDTO = new GetDevicesDTO();
    getDevicesDTO.devices = devices;
    return getDevicesDTO;
  }
}
