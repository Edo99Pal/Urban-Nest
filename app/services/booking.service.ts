import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocationsService } from './locations.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  guests: number[] = [1, 2, 3, 4, 5, 6];
  formQuestions: any[] = [
    {
      title: 'Tell us your full name'
    },
    {
      title: 'What\'s the location you plan to stay in?'
    },
    {
      title: 'Room Type'
    },
    [
      {
        title: 'What\'s the number of guests?'
      },
      {
        title: 'what\'s the number of rooms?'
      }
    ],
    {
      title: 'Start Date'
    },
    {
      title: 'End Date'
    },
    {
      title: 'Do you want breakfast?'
    },
    {
      title: 'Confirm?'
    }
  ];

  booking: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  roomTypes = ['Dormitory Room', 'Private Room (single)', 'Private Room (Double)', 'Family Room']
  
  locations: any[] = [];

  showed = false;

  randomPriceDay = Math.random() * 60 + 55.5;

  price: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private _locationsService: LocationsService) { 
    this.locations = this._locationsService.getHostels;
  }

  get getGuests(): number[] {
    return this.guests;
  }
  get getFormQuestions(): any[] {
    return this.formQuestions;
  }
  get getRoomTypes(): string[] {
    return this.roomTypes;
  }

  set setBooking(booking: any) {
    this.booking = booking;
  }

  bookingNotNull(): boolean {
    return this.booking.value;
  }

  calculatePrice(startDate: Date, endDate: Date, nOfGuests: number, breakfast: boolean) {
    let days = endDate.getTime() - startDate.getTime();
    days /= Math.ceil(1000 * 60 * 60 * 24);
    let guests = nOfGuests;
    let price =  guests != null && guests != undefined ? days * this.randomPriceDay * guests : days * this.randomPriceDay;

    return breakfast ? price + days * guests * 10 : price;
  }

  set setPrice(n: number) {
    this.price.next(n);
  }
}
