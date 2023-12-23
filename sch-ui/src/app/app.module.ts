import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './before-login/gallery/gallery.component';
import { HomeComponent } from './before-login/home/home.component';
import { NavComponent } from './before-login/nav/nav.component';
import { ContactComponent } from './before-login/contact/contact.component';
import { BookNowComponent } from './before-login/book-now/book-now.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from "@angular/forms";
import { LoginComponent } from './before-login/login/login.component';
import { DashboardComponent } from './after-login/dashboard/dashboard.component';
import { HeaderComponent } from './after-login/header/header.component';
import { SideNavComponent } from './after-login/side-nav/side-nav.component';
import { TopWidgetsComponent } from './after-login/top-widgets/top-widgets.component';
import { MainComponent } from './after-login/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SalesByMonthComponent } from './after-login/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './after-login/sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './after-login/last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './after-login/top-three-products/top-three-products.component';
import { ChartModule } from 'angular-highcharts';
import { NoticeComponent } from './before-login/notice/notice.component';
import { StudyResourceComponent } from './after-login/study-resource/study-resource.component';
import { EventComponent } from './after-login/event/event.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './before-login/footer/footer.component';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

import { EventmodalComponent } from './after-login/eventmodal/eventmodal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';




@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    BookNowComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    MainComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    NoticeComponent,
    StudyResourceComponent,
    EventComponent,
    EventmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    ChartModule,
    FullCalendarModule,
    HttpClientModule,
    DynamicDialogModule,
    DialogModule,
    ButtonModule,
    MdbModalModule,
    MdbFormsModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
