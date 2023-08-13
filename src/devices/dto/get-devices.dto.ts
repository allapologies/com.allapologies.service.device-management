import { ApiProperty } from '@nestjs/swagger';

import { DeviceDTO } from './device.dto';

export class GetDevicesDTO {
  @ApiProperty()
  devices: DeviceDTO[];

  static from(devices: DeviceDTO[]) {
    const getDevicesDTO = new GetDevicesDTO();
    getDevicesDTO.devices = devices;
    return getDevicesDTO;
  }
}
