import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BookNowComponent } from './book-now/book-now.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticeComponent } from './notice/notice.component';
import { StudyResourceComponent } from './study-resource/study-resource.component';
import { MainComponent } from './main/main.component';
import { EventComponent } from './event/event.component';

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
