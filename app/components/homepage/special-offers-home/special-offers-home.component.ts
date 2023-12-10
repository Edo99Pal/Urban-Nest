import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageChangerService } from 'src/app/services/page-changer.service';
import { SpecialOffersService } from 'src/app/services/special-offers.service';

@Component({
  selector: 'app-special-offers-home',
  templateUrl: './special-offers-home.component.html',
  styleUrls: ['./special-offers-home.component.scss']
})
export class SpecialOffersHomeComponent implements OnInit {
  specialOffers: any = [];
  currentOfferIndex = 1;

  constructor(private service: SpecialOffersService, public pageService: PageChangerService) { }

  ngOnInit(): void {
    this.specialOffers = this.service.getSpecialOffers;
  }

  onChange(index: number) {
    this.currentOfferIndex = index;
  }
  onPageChange(n: number) {
    this.pageService.onPageChange(n);
  }
}
