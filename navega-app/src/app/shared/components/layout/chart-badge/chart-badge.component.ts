import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-badge',
  templateUrl: './chart-badge.component.html',
  styleUrls: ['./chart-badge.component.less'],
})
export class ChartBadgeComponent implements OnInit {
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() value!: number;
  constructor() {}

  ngOnInit(): void {}
}
