import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-g2-project';
  title = "My first Angular component";
  appMessage = "";


  appEvent(event){
    this.appMessage = event;
    // alert('AppComponent event');
    //alert(event);
  }
}