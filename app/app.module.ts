import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { AccomodationComponent } from './components/accommodation/accommodation.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationsHomeComponent } from './components/homepage/locations/locations-home.component';
import { BookingHomeComponent } from './components/homepage/booking-home/booking-home.component';
import { ActivitiesHomeComponent } from './components/homepage/activities-home/activities-home.component';
import { ActivityComponent } from './components/homepage/activities-home/activity/activity.component';
import { CarouselComponent } from './components/components/carousel/carousel.component';
import { AccomodationHomeComponent } from './components/homepage/accommodation-home/accommodation-home.component';
import { FacilitiesHomeComponent } from './components/homepage/facilities-home/facilities-home.component';
import { SpecialOffersHomeComponent } from './components/homepage/special-offers-home/special-offers-home.component';
import { OfferComponent } from './components/homepage/special-offers-home/offer/offer.component';
import { ReviewsHomeComponent } from './components/homepage/reviews-home/reviews-home.component';
import { FaqHomeComponent } from './components/homepage/faq-home/faq-home.component';
import { ContactUsHomeComponent } from './components/homepage/contact-us-home/contact-us-home.component';
import { LocationComponent } from './components/locations/location/location.component';
import { BookingFormComponent } from './components/components/booking-form/booking-form.component';
import { ModalCancelBookingComponent } from './components/components/modal-cancel-booking/modal-cancel-booking.component';
import { ActivityPageComponent } from './components/activities/activity-page/activity-page.component';
import { OfferPageComponent } from './components/special-offers/offer-page/offer-page.component';

import { LocationsService } from './services/locations.service';
import { BookingService } from './services/booking.service';
@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    ActivitiesComponent,
    BookingComponent,
    ContactUsComponent,
    FacilitiesComponent,
    FaqComponent,
    HomepageComponent,
    LocationsComponent,
    ReviewsComponent,
    SpecialOffersComponent,
    HeaderComponent,
    LocationsHomeComponent,
    BookingHomeComponent,
    ActivitiesHomeComponent,
    ActivityComponent,
    CarouselComponent,
    AccomodationHomeComponent,
    FacilitiesHomeComponent,
    SpecialOffersHomeComponent,
    OfferComponent,
    ReviewsHomeComponent,
    FaqHomeComponent,
    ContactUsHomeComponent,
    LocationComponent,
    BookingFormComponent,
    ModalCancelBookingComponent,
    ActivityPageComponent,
    OfferPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent, [LocationsService, BookingService]]
})
export class AppModule { }
