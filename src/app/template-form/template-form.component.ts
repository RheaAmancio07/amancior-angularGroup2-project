import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Device } from './../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Output() deviceDetail = new EventEmitter();

  constructor(private router: Router, private deviceService: DeviceService) { }

  ngOnInit() {
  }

  // addDevice(form: NgForm){
  //   // alert('Add Device');
  //   // console.log(form.value);
  //   this.deviceDetail.emit(form.value);
  // }
  
  addDevice(form: NgForm){
    form.value.id = this.deviceService.getNewId()
    this.deviceService.addDevice(form.value);
    this.router.navigate(['/list']);
  }

}
