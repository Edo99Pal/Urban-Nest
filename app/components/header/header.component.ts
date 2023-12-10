import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { MenuService } from 'src/app/services/menu.service';
import { PageChangerService } from 'src/app/services/page-changer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() page = new EventEmitter<number>();
  menuItems: string[] = [];
  menuOpen = false;
  animated: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  matIcons = [
    'location_on',
    'book',
    'directions_bike',
    'hotel',
    'settings_input_component',
    'local_offer',
    'rate_review',
    'question_answer',
    'contact_support'
  ]

constructor(private service: MenuService, public pageService: PageChangerService, public bookingService: BookingService) { }

ngOnInit(): void {
  this.menuItems = this.service.getMenuItems;
}

onPageChange(n: number) {
  this.pageService.onPageChange(n); 
}

animation() {
  for(let i = 0; i < 10; i++) {
    setTimeout(() => {
      this.animated[i] = true;
    }, 100 * i)
  }
}

openMenu() {
  this.menuOpen = true;
}
closeMenu() {
  this.menuOpen = false;
  for(let i = 0; i < 10; i++) {
    this.animated[i] = false;
  }
}

}
