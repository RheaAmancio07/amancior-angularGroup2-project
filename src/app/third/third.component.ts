import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  @Output() thirdOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // alert('test');
    this.thirdOutput.emit('emitted value');
  }


}
