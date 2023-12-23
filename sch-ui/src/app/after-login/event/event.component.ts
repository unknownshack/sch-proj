import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  Events: any[] = [{title: 'event 1', "start": "2023-12-23T04:00:00", "end": "2023-12-25T05:30:00"}];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
        //only dayGrid from full calendar installed to use other view other modules need to be installed
        //right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek', 
      right: ''
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  constructor(private httpClient: HttpClient) {}
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {
    setTimeout(() => {
      // return this.httpClient
      //   .get('http://localhost:8888/event.php')
      //   .subscribe((res: any) => {
      //     this.Events.push(res);
      //     console.log(this.Events);
      //   });
    }, 2200);
    setTimeout(() => {
      console.log(this.Events);
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.Events,
        dateClick: this.onDateClick.bind(this),
      };
    }, 2500);
  }
}
