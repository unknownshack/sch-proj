import { Component } from '@angular/core';
import { CallingComponent } from '../constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  callingComponent = CallingComponent;

}
