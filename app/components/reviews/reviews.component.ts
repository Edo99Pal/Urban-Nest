import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  allReviews: any[] = [];
  rating = new Array();

  constructor(private service: ReviewsService) { }

  ngOnInit(): void {
    this.allReviews = this.service.getReviews;
    for(let el of this.allReviews) {
      this.rating[this.allReviews.indexOf(el)] = [];
      for(let i = 0; i < el.rating; i++) {
        this.rating[this.allReviews.indexOf(el)].push('');
      }
    }
  }
}
