import {
  ChartData,
  ChartOptions,
} from 'node_modules/chart.js/dist/types/index.d';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.less'],
})
export class ChartDoughnutComponent implements OnInit {
  @Input() data: ChartData<'doughnut'> = {
    datasets: [
      {
        backgroundColor: ['#594CBE'],
        borderColor: ['transparent'],
        borderWidth: 0,
        data: [100],
      },
    ],
  };
  @Input() chartOptions: ChartOptions<'doughnut'> = {};
  @Input() width: string = '150px';

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
      rotation: -90,
      circumference: 360,
    };
  }
}
