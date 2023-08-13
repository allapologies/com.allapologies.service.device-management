import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { Device } from './domain/device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  providers: [DevicesService],
  controllers: [DevicesController],
})
export class DevicesModule {}
