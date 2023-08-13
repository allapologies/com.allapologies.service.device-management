import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomBytes } from 'crypto';

import { Device } from './domain/device.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device) private deviceRepository: Repository<Device>,
  ) {}

  async create(device: Omit<Device, 'id'>): Promise<Device> {
    return this.deviceRepository.save({
      ...device,
      id: this.generateId(),
    });
  }

  async findAll(): Promise<Device[]> {
    return await this.deviceRepository.find();
  }

  async findOne(id: string): Promise<Device> {
    return await this.deviceRepository.findOneBy({ id });
  }

  async update(device: Device): Promise<Device> {
    await this.deviceRepository.update(device.id, device);
    return await this.findOne(device.id);
  }

  async delete(id: string): Promise<void> {
    await this.deviceRepository.delete(id);
  }

  private generateId(): string {
    return randomBytes(4).toString('hex');
  }
}
