import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialOffersService {
  specialOffers = [
    {
      city: 'Berlin',
      offerTitle: 'Berlin Adventure Package',
      description: 'Experience the vibrant culture of Berlin with our adventure package! Includes city tours, bike rentals, and local attraction discounts.',
      info: `Experience the vibrant culture of Berlin with our adventure package! Includes city tours, bike rentals, and local attraction discounts. Immerse yourself in the local scene with bike rentals, traversing the city's unique neighborhoods. Valid until December 31st, 2023, with a 15% discount.`,
      validUntil: '2023-12-31',
      discountPercentage: 15
    },
    {
      city: 'Prague',
      offerTitle: 'Prague Getaway Deal',
      description: 'Enjoy a relaxing getaway in Prague! Our package offers an escape to tranquility, including access to luxurious spas, complimentary breakfast, and a guided tour of historic landmarks.',
      info: `Enjoy a relaxing getaway in Prague! Our package offers an escape to tranquility, including access to luxurious spas for ultimate relaxation. Start your day with complimentary breakfast and embark on a guided tour exploring Prague's historic landmarks. Valid until November 30th, 2023, with a 20% discount.`,
      validUntil: '2023-11-30',
      discountPercentage: 20
    },
    {
      city: 'Vienna',
      offerTitle: 'Vienna Cultural Experience',
      description: 'Immerse yourself in Vienna\'s rich culture! Get discounted tickets to classical concerts, museums, and exclusive local events.',
      info: `Immerse yourself in Vienna's rich cultural tapestry! Delve into the heart of Vienna's artistic and musical heritage with discounted tickets to classical concerts and access to world-class museums. Valid until December 15th, 2023, with a 10% discount.`,
      validUntil: '2023-12-15',
      discountPercentage: 10
    },
    {
      city: 'Budapest',
      offerTitle: 'Budapest Adventure Pass',
      description: 'Explore Budapest with our adventure pass! Enjoy river cruises, thermal baths, and access to famous landmarks at discounted rates.',
      info: `Explore the charm of Budapest with our adventure pass! Cruise along the majestic river, indulge in rejuvenating thermal baths, and visit famous landmarks at discounted rates. Valid until December 10th, 2023, with a 25% discount.`,
      validUntil: '2023-12-10',
      discountPercentage: 25
    }
  ];
  constructor() { }

  get getSpecialOffers() {
    return this.specialOffers;
  }
}
