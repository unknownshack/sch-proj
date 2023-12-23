import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('sidebar', { static: false }) sidebarElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleSidebarClass() {
  }
  sidebarToggle(){
    if (this.sidebarElement) {
      const element = this.sidebarElement.nativeElement;
      const hasClass = element.classList.contains('active');

      if (hasClass) {
        this.renderer.removeClass(element, 'active');
      } else {
        this.renderer.addClass(element, 'active');
      }
    }
  }
}
