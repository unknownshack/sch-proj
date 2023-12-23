import { Component, Input } from '@angular/core';
import {CallingComponent} from '../constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  callingComponent = CallingComponent;
  
  @Input() componentName = this.callingComponent.Home;


}
