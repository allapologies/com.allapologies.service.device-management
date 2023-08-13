import { ApiProperty } from '@nestjs/swagger';

export class UpsertDeviceDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  batteryStatus: number;
}
