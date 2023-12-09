import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  berlinEventsDay: any[] = [];
  pragueEventsDay: any[] = [];
  viennaEventsDay: any[] = [];
  budapestEventsDay: any[] = [];
  berlinEventsNight: any[] = [];
  pragueEventsNight: any[] = [];
  viennaEventsNight: any[] = [];
  budapestEventsNight: any[] = [];

  constructor(private service: ActivitiesService) { }

  ngOnInit() {
    this.berlinEventsDay = this.service.getBerlinEvents.filter(el => el.dayTime);
    this.pragueEventsDay = this.service.getPragueEvents.filter(el => el.dayTime);
    this.viennaEventsDay = this.service.getViennaEvents.filter(el => el.dayTime);
    this.budapestEventsDay = this.service.getBudapestEvents.filter(el => el.dayTime);
    this.berlinEventsNight = this.service.getBerlinEvents.filter(el => !el.dayTime);
    this.pragueEventsNight = this.service.getPragueEvents.filter(el => !el.dayTime);
    this.viennaEventsNight = this.service.getViennaEvents.filter(el => !el.dayTime);
    this.budapestEventsNight = this.service.getBudapestEvents.filter(el => !el.dayTime);

    for(let el of this.berlinEventsDay) {
      console.log(el);
    }
    for(let el of this.pragueEventsDay) {
      console.log(el);
    }
    for(let el of this.viennaEventsDay) {
      console.log(el);
    }
    for(let el of this.budapestEventsDay) {
      console.log(el);
    }
    for(let el of this.berlinEventsNight) {
      console.log(el);
    }
    for(let el of this.pragueEventsNight) {
      console.log(el);
    }
    for(let el of this.viennaEventsNight) {
      console.log(el);
    }
    for(let el of this.budapestEventsNight) {
      console.log(el);
    }
  }

}
