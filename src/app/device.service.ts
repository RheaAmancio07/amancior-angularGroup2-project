import { Injectable } from '@angular/core';
import { Device} from './models';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devices: Device[] = [
    {
      id: 1,
      name:  "Device01",
      brand: "Samsung",
      model: "Galaxy Book W720NZKB",
      year: "2021",
      serial:"samsung2021"
          
    },
    {
      id: 2,
      name:  "Device02",
      brand: "Acer",
      model: "Aspire",
      year: "2021",
      serial: "aspire2021"
    }
  ]

  id: number;

  constructor() { }

  getDevices(){
    return this.devices;
  }

  addDevice(device: Device){
    this.devices.push(device);
    // console.log(this.devices);
  }

  getDevice(id: number):Device{
    console.log('SERVICE_ID', id);
    return this.devices.find(device => device.id === id)
    
  }

  updateDevice(updatedDevice: Device){
    let index = this.devices.findIndex(device => device.id === updatedDevice.id)

    this.devices[index] = updatedDevice;
  }
  getNewId(): number {
   return this.devices[this.devices.length -1].id + 1
  }
}


