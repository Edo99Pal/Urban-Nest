import { Component, OnInit } from '@angular/core';
import { PageChangerService } from 'src/app/services/page-changer.service';
import { SpecialOffersService } from 'src/app/services/special-offers.service';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent implements OnInit {
  offers: any[] = []

  constructor(private service: SpecialOffersService, private pageService: PageChangerService) { }

  ngOnInit(): void {
    this.offers = this.service.getSpecialOffers;
  }

  onPageChange(n: number) {
    this.pageService.onPageChange(n);
  }
}
