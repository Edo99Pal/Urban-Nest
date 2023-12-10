import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { PageChangerService } from 'src/app/services/page-changer.service';

@Component({
  selector: 'app-locations-home',
  templateUrl: './locations-home.component.html',
  styleUrls: ['./locations-home.component.scss']
})
export class LocationsHomeComponent implements OnInit {
  cities: any[] = [];

  constructor(private service: LocationsService, public pageService: PageChangerService) { }

  ngOnInit(): void {
    this.cities = this.service.getHostels;
  }

  onPageChange(n: number) {
    this.pageService.onPageChange(n);
  }
}
