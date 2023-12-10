import { Injectable } from '@angular/core';
import { BookingService } from './booking.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageChangerService {
  page: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  innerWidth: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private _bookingService: BookingService) {
  }

  onPageChange(n: number) {
    this.page.next(n);
    this.innerWidth.next(window.innerWidth);
    this.page.value == 2 ? this._bookingService.showed = true : null;
    window.scrollTo({
      top: 0
    });
  }

}
