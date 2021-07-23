import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Device } from './../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Output() deviceDetail = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addDevice(form: NgForm){
    // alert('Add Device');
    // console.log(form.value);
    this.deviceDetail.emit(form.value);
  }

}
