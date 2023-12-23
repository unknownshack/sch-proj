import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './before-login/gallery/gallery.component';
import { HomeComponent } from './before-login/home/home.component';
import { ContactComponent } from './before-login/contact/contact.component';
import { BookNowComponent } from './before-login/book-now/book-now.component';
import { LoginComponent } from './before-login/login/login.component';
import { DashboardComponent } from './after-login/dashboard/dashboard.component';
import { NoticeComponent } from './before-login/notice/notice.component';
import { StudyResourceComponent } from './after-login/study-resource/study-resource.component';
import { MainComponent } from './after-login/main/main.component';
import { EventComponent } from './after-login/event/event.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'book-now', component: BookNowComponent},
  { path: 'login', component: LoginComponent},
  { path: 'himchuli', component: DashboardComponent,
    children: [
     {path: '', component: MainComponent, outlet:"content"},
     { path: 'study-resource', component: StudyResourceComponent, outlet:"content"},
     { path: 'events',  component: EventComponent, outlet:"content"}
    ]
  },
  { path: 'notice', component: NoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
