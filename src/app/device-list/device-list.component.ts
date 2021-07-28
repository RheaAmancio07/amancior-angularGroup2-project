import { Component, OnInit } from '@angular/core';
import { Device } from './../models';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices: Device[];

  // devices: Device[] = [
  //   {
  //     id: 1,
  //     name:  "Device01",
  //     brand: "Samsung",
  //     model: "Galaxy Book W720NZKB",
  //     year: "2021",
  //     serial:"samsung2021"
          
  //   },
  //   {
  //     id: 2,
  //     name:  "Device02",
  //     brand: "Acer",
  //     model: "Aspire",
  //     year: "2021",
  //     serial: "aspire2021"
  //   }
  // ]

  constructor(
    private router: Router,
    private deviceService: DeviceService) { }

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  
  addDevice(){
    this.router.navigate(['/add']);
  }

}
