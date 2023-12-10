import { Component, Input, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent implements OnInit {
  @Input() activity: any = { };
  index: number = 0;
  constructor(private service: ActivitiesService) { }

  ngOnInit(): void {
    this.index = this.service.getEvents.indexOf(this.activity) + 1;
  }
}
