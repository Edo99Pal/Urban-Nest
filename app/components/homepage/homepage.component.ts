import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { PageChangerService } from 'src/app/services/page-changer.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ MenuService ]
})
export class HomepageComponent implements OnInit {
  menuItems: string[] = [];

  constructor(private service: MenuService, private pageService: PageChangerService) { }

  ngOnInit() {
    this.menuItems = this.service.getMenuItems;
  }

  onPageChange(n: number) {
    this.pageService.onPageChange(n);
  }
}
