import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews-home',
  templateUrl: './reviews-home.component.html',
  styleUrls: ['./reviews-home.component.scss']
})
export class ReviewsHomeComponent implements OnInit {
  reviews: any = [];
  rating = new Array();
  constructor(private service: ReviewsService) { }

  ngOnInit(): void {
    this.reviews = this.service.getReviews;
    for(let el of this.reviews) {
      this.rating[this.reviews.indexOf(el)] = [];
      for(let i = 0; i < el.rating; i++) {
        this.rating[this.reviews.indexOf(el)].push('');
      }
    }
  }
}
