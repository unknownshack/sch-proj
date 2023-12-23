import { Component, Input, OnInit } from '@angular/core';
import { CallingComponent } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   callingComponent = CallingComponent;
   //homeComponent = this.callingComponent.Home;
  
  
  ngOnInit(): void {
    //console.log("Calling component home value"+ this.homeComponent);
    //throw new Error('Method not implemented.');
  }

  
  
}
