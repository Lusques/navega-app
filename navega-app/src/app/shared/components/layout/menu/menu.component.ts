import { MenuItem } from 'primeng/api';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menu!: Menu;
  @Input() items!: MenuItem[];

  ngOnInit(): void {}

  toggleMenu(event: Event) {
    this.menu.toggle(event);
  }
}
