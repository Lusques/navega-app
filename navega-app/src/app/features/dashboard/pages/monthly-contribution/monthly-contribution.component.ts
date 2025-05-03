import {
  ChartData,
  ChartOptions,
} from 'node_modules/chart.js/dist/types/index.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-contribution',
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less'],
})
export class MonthlyContributionComponent implements OnInit {
  data!: ChartData<'doughnut'>;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      datasets: [
        {
          backgroundColor: ['#594CBE', '#E22E6F'],
          borderColor: ['transparent'],
          borderWidth: 0,
          data: [100, 40],
        },
      ],
    };
  }
}
