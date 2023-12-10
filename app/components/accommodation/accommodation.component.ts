import { Component, OnInit } from '@angular/core';
import { AccomodationService } from 'src/app/services/accomodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccomodationComponent implements OnInit {
  accomodations: any = { }

  constructor(private service: AccomodationService) { }

  ngOnInit(): void {
    this.accomodations = this.service.getRooms;
  }
}
