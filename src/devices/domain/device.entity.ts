import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'devices',
})
export class Device {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  owner: string;

  @Column()
  batteryStatus: number;
}
