import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  booking: any = { };
  edit: boolean = false;
  price: number = 0;
  guests: number[] = [];
  roomTypes: string[] = [];
  today: Date = new Date();
  submitRes: boolean = false;
  locations: any[] = [];

  constructor(public service: BookingService) {
    this.service.booking.subscribe(value => {
      this.booking = value;
    }); 
    this.service.price.subscribe(value => {
      this.price = value; 
    });
  }

  ngOnInit(): void {
    this.guests = this.service.getGuests;
    this.roomTypes = this.service.getRoomTypes;
    this.locations = this.service.locations;
  }

  getAvailableEndDate() {
    let ret = new Date();
    ret.setDate(this.booking.startDate.getDate() + 1);
    return ret;
  }

  onCancelEdit() {
    this.edit = false;
    this.booking = this.service.booking;
  }

  onEdit() {
    this.edit = false;
    this.service.booking.next(this.booking); 
    this.service.setPrice = this.service.calculatePrice(this.booking.startDate, this.booking.endDate, this.booking.nOfGuests, this.booking.breakfast);
  }

  onDelete() {
  this.service.booking.next(null);
  }
}
