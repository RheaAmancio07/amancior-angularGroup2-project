import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `<p>second works!</p>`,
  // template: `<p>second works! <br><br> {{secondMessage ? secondMessage: '______'}}</p>`,
  styles: ['p {color: red}']
})

export class SecondComponent{

    @Input() secondMessage = "";

}

