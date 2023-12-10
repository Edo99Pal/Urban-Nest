import { Component, Input, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() hostel: any = { };
  rating: any[] = new Array();

  constructor(public service: LocationsService) { }

  ngOnInit(): void {
    for(let i = 0; i < Math.floor(Math.round(this.hostel.rating)); i++) {
      this.rating.push('');
    }
  }

}
