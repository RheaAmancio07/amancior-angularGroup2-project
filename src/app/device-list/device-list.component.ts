import { Component, OnInit } from '@angular/core';
import { Device } from './../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  addDevice(){
    this.router.navigate(['/add']);
  }

}
