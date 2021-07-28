import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from './../models';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail: Device;

  @Output() updateDetail = new EventEmitter();

  constructor(private router: Router, private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  // updateDevice(id){
  //   this.updateDetail.emit(id);
  // }

  updateDevice(id:number){
    // this.deviceService.id = this.deviceDetail.id;
    this.router.navigate([`/update/${id}`]);
  }


}