import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-eventmodal',
  templateUrl: './eventmodal.component.html',
  styleUrls: ['./eventmodal.component.scss']
})
export class EventmodalComponent {


  constructor(public mdbModalRef: MdbModalRef<EventmodalComponent>){
  }

  onClose(){
    this.mdbModalRef.close();
  }

  saveEvent(){
    
  }

}
