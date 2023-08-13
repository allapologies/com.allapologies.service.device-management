import { ApiProperty } from '@nestjs/swagger';

import { Device } from '../domain/device.entity';

export class DeviceDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
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
