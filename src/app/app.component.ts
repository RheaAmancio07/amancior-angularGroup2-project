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

  showUpdate:boolean = false;

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

  selectedDevice: Device;

  updateDevice(deviceId:number){
    this.showUpdate = true;
    this.selectedDevice = this.devices.find(device => device.id == deviceId)
    console.log(deviceId + 'app');
  }

  updateDisplay(updatedDevice:Device){
    this.showUpdate = false;
    //console.log(updatedDevice);
    let index = this.devices.findIndex(device=> device.id == updatedDevice.id)
    console.log(index);
    this.devices[index] = updatedDevice;
    
    
  }

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