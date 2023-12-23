import { Component, Input } from '@angular/core';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
  faBook,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';
import { UserRole } from '../../constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faBook = faBook;
  faCalendar = faCalendar

  UserRole = UserRole;
  activeLink: string = 'study-resource';


  @Input() role = UserRole.Student;

  constructor(private router: Router){

  }

  navigate(link: string){
    this.activeLink = link;
    let fullUrl = '/himchuli/(content:'+link+'))';
    this.router.navigateByUrl(fullUrl);
  }

}
