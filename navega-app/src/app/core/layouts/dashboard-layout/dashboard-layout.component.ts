import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.less'],
})
export class DashboardLayoutComponent implements OnInit {
  showNavigation: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  toggleNavigation() {
    this.showNavigation = !this.showNavigation;
  }
}
