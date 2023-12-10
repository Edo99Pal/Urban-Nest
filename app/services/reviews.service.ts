import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
    reviews = [
      {
        nickname: "HappyTraveler123",
        imageurl: "review_1.jpg",
        review: "Absolutely amazing hostel! Great location, friendly staff, and clean facilities. I would highly recommend it.",
        rating: 5
      },
      {
        nickname: "AdventureSeeker87",
        imageurl: "review_2.jpg",
        review: "One of the best hostels I've stayed in! The atmosphere was fantastic, met wonderful people, and the staff was incredibly helpful.",
        rating: 5
      },
      {
        nickname: "WanderlustNomad",
        imageurl: "review_3.jpg",
        review: "Incredible experience! Clean rooms, excellent amenities, and the location was perfect. I'd definitely stay here again.",
        rating: 5
      },
      {
        nickname: "Globetrotter22",
        imageurl: "review_4.jpg",
        review: "A decent hostel with good facilities. However, the staff could be more accommodating. Overall, an okay stay.",
        rating: 3
      },
      {
        nickname: "Backpacker99",
        imageurl: "review_5.jpg",
        review: "Average hostel. Nothing extraordinary, but it served its purpose. Location was convenient, but rooms were a bit cramped.",
        rating: 3
      },
      {
        nickname: "ExplorerGirl",
        imageurl: "review_6.jpg",
        review: "Fantastic hostel! Loved the social atmosphere and the staff were incredibly friendly and helpful.",
        rating: 4
      },
      {
        nickname: "TravelBug365",
        imageurl: "review_7.jpg",
        review: "Good hostel overall. Clean rooms and decent facilities. The location was a bit far from attractions but manageable.",
        rating: 4
      },
      {
        nickname: "Jetsetter22",
        imageurl: "review_8.jpg",
        review: "Nice hostel, but it could improve its cleanliness. Great location and helpful staff.",
        rating: 3
      },
      {
        nickname: "NomadAdventures",
        imageurl: "review_9.jpg",
        review: "An okay hostel. Nothing special, but it was affordable and had basic amenities.",
        rating: 2
      },
      {
        nickname: "RoamingFree88",
        imageurl: "review_10.jpg",
        review: "Disappointing stay. The facilities were not well-maintained, and the staff seemed indifferent.",
        rating: 2
      }
  ];
  constructor() { }

  get getReviews() {
    return this.reviews;
  }
}
