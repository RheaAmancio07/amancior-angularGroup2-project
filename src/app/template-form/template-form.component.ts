import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Device } from './../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Output() deviceDetail = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // addDevice(form: NgForm){
  //   // alert('Add Device');
  //   // console.log(form.value);
  //   this.deviceDetail.emit(form.value);
  // }
  
  addDevice(){
    this.router.navigate(['/list']);
  }

}
