import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './before-login/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BookNowComponent } from './book-now/book-now.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { ChartModule } from 'angular-highcharts';
import { NoticeComponent } from './notice/notice.component';
import { StudyResourceComponent } from './study-resource/study-resource.component';
import { EventComponent } from './event/event.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';


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
    EventComponent
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
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
