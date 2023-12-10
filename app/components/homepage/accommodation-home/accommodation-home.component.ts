import { Component, OnInit } from '@angular/core';
import { AccomodationService } from 'src/app/services/accomodation.service';

@Component({
  selector: 'app-accommodation-home',
  templateUrl: './accommodation-home.component.html',
  styleUrls: ['./accommodation-home.component.scss']
})
export class AccomodationHomeComponent implements OnInit {
  rooms: any = [];

  constructor(private service: AccomodationService) { }

  ngOnInit(): void {
    this.rooms = this.service.getRooms;
  }
}
