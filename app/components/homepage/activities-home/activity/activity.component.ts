import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() index = 0;
  @Input() activity: any = {}
  @Input() size: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }
}
