import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Device } from '../models';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  updateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    serial: new FormControl('')
  })

  device: Device;

  @Output() update = new EventEmitter();

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.device = this.deviceService
      .getDevice(parseInt(this.route.snapshot.paramMap.get('id')))
    // this.device = this.deviceService.getDevice(this.deviceService.id)

    this.updateForm = new FormGroup({
      id: new FormControl(this.device.id),
      name: new FormControl(this.device.name),
      brand: new FormControl(this.device.brand),
      model: new FormControl(this.device.model),
      year: new FormControl(this.device.year),
      serial: new FormControl(this.device.serial)
    })
  }
  // updateDevice(){
  //   // alert('update device');
  //   console.log(this.updateForm.value);
  //   this.update.emit(this.updateForm.value);
  // }
  updateDevice() {
    this.deviceService.updateDevice(this.updateForm.value);
    this.router.navigate(['/list']);
  }
}
