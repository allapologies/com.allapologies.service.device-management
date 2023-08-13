import { DevicesController } from './devices.controller';

import { DevicesService } from './devices.service';
import { Device } from './domain/device.entity';

describe('DevicesController', () => {
  let devicesController: DevicesController;
  let devicesService: DevicesService;

  beforeEach(async () => {
    devicesService = new DevicesService(undefined);
    devicesController = new DevicesController(devicesService);
  });

  it('findAll. returns list of devices', async () => {
    // given
    const devices: Device[] = [
      {
        id: '1',
        name: 'Device 1',
        type: 'type 1',
        owner: 'owner 1',
        batteryStatus: 100,
      },
    ];

    jest.spyOn(devicesService, 'findAll').mockResolvedValue(devices);

    // when
    const result = await devicesController.findAll();

    // then
    const expected = { devices };
    expect(result).toEqual(expected);
  });

  it('create. creates new device', async () => {
    // given
    const device = {
      name: 'Device 1',
      type: 'type 1',
      owner: 'owner 1',
      batteryStatus: 100,
    };

    const created = {
      id: 'cd85cdf5-5c91-4187-8bde-6019b8868818',
      ...device,
    };

    jest.spyOn(devicesService, 'create').mockResolvedValue(created);

    // when
    const result = await devicesController.create(device);

    // then
    expect(result).toEqual(created);
  });

  it('update. updated existing device', async () => {
    // given
    const device = {
      id: 'cd85cdf5-5c91-4187-8bde-6019b8868818',
      name: 'Device 1',
      type: 'type 1',
      owner: 'owner 1',
      batteryStatus: 100,
    };

    const updated = {
      ...device,
      name: 'Device 2',
    };

    jest.spyOn(devicesService, 'update').mockResolvedValue(updated);

    // when
    const result = await devicesController.update(device.id, device);

    // then
    expect(result).toEqual(updated);
  });

  it('delete. deletes existing device', async () => {
    // given
    const deviceId = 'cd85cdf5-5c91-4187-8bde-6019b8868818';

    jest.spyOn(devicesService, 'delete').mockResolvedValue();

    // when
    const result = await devicesController.delete(deviceId);

    // then
    expect(result).toBeUndefined();
  });
});
