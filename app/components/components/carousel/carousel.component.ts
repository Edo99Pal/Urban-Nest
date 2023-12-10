import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: any = {};
  @Output() indexChange = new EventEmitter<number>();
  @Input() currentIndex = 1;

  constructor() { }

  ngOnInit(): void {
    
  }

  onChange(direction: string) {
    if(direction == 'back' && this.currentIndex > 1) this.currentIndex--;
    else if(direction == 'back') this.currentIndex = this.items.length;
    else if(direction == 'forward' && this.currentIndex < this.items.length) this.currentIndex++;
    else this.currentIndex = 1;
    this.indexChange.emit(this.currentIndex);
  }
}
