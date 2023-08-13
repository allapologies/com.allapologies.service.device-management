import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';

import { DeviceDTO } from './dto/device.dto';
import { GetDevicesDTO } from './dto/get-devices.dto';
import { UpsertDeviceDTO } from './dto/upsert-device-d-t.o';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  async findAll(): Promise<GetDevicesDTO> {
    const devices = await this.devicesService.findAll();
    return GetDevicesDTO.from(devices.map(DeviceDTO.from));
  }

  @Post()
  @HttpCode(201)
  async create(@Body() device: UpsertDeviceDTO): Promise<DeviceDTO> {
    const createdDevice = await this.devicesService.create(device);
    return DeviceDTO.from(createdDevice);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() device: UpsertDeviceDTO,
  ): Promise<DeviceDTO> {
    const updatedDevice = await this.devicesService.update({
      id,
      ...device,
    });
    return DeviceDTO.from(updatedDevice);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.devicesService.delete(id);
  }
}
