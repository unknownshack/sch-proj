import { Component } from '@angular/core';
import { CallingComponent } from '../../constants';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  callingComponent = CallingComponent;

  tableData = [
    { account: 'Visa - 3412', dueDate: '04/01/2016', amount: 1190, period: '03/01/2016 - 03/31/2016' },
    { account: 'Visa - 6076', dueDate: '03/01/2016', amount: 2443, period: '02/01/2016 - 02/29/2016' },
    { account: 'Corporate AMEX', dueDate: '03/01/2016', amount: 1181, period: '02/01/2016 - 02/29/2016' },
    { account: 'Visa - 3412', dueDate: '02/01/2016', amount: 842, period: '01/01/2016 - 01/31/2016' }
    // Add more test data if needed
  ];

  isPopupOpen = false;

  openPopup(): void {
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
  }

  openPopUp(item: {}): void{
    console.log(item);
    this.isPopupOpen = true;

  }
}
