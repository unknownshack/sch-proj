import { Component } from '@angular/core';
import { CallingComponent } from '../constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  callingComponent = CallingComponent;
}
