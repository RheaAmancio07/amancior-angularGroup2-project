import { Component, Output, EventEmitter} from '@angular/core';
import { Device } from './models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @Output() counterChange = new EventEmitter();

  title = "My first Angular component";

  devices: Device[] = [
    {
      name:  "Device01",
      brand: "Samsung",
      model: "Galaxy Book W720NZKB",
      year: "2021",
      serial:"samsung2021"

    },
    {
      name:  "Device02",
      brand: "Acer",
      model: "Aspire",
      year: "2021",
      serial: "aspire2021"
    }
  ]

  newDeviceAdded(device:Device){
    console.log(device);
    this.devices.push(device);

  }





  // // Activity 5
  // activity5Title = "Device Details View";

  // //Activity 4
  // counter = 0;
  // addCount(){
  //   this.counterChange.emit(this.counter++);
  // }
  // subCount(){
  //   this.counterChange.emit(this.counter--);
  // }

  //DEMONSTRATION
  // title = 'angular-g2-project';
  // appMessage = "from AppComponent to FirstComponent";

  // appMessageArray = ['hi', 'hello', 'goodbye'];

  // showComponent = true;

  // showHide() {
  //   this.showComponent = !this.showComponent;
  // }

  // appEvent(event: string){
  //   // alert('AppComponent event');
  //   alert(event);
  // }
}