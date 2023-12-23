import { Component } from '@angular/core';
import { CallingComponent } from '../constants';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  callingComponent = CallingComponent;

  constructor(private route: ActivatedRoute, private router: Router){}

  submit(){
    console.log("submit invoked");
    this.router.navigate(["/himchuli"]);
  }
}
