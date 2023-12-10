import { Component, Input, OnInit } from '@angular/core';
import { SpecialOffersService } from 'src/app/services/special-offers.service';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.scss']
})
export class OfferPageComponent implements OnInit {
  @Input() offer: any =  { }
  
  constructor(public service: SpecialOffersService) { }

  ngOnInit(): void {
    
  }
}
