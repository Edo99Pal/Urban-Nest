import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = [
    'Locations',
    'Booking',
    'Activities',
    'Accommodation',
    'Facilities',
    'Special offers',
    'Reviews',
    'FAQ',
    'Contact us'
  ];
  constructor() { }

  getMenuItems(): string[] {
    return this.menuItems;
  }
}
