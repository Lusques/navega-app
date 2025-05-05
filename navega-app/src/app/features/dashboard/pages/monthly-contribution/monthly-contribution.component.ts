import { ChartData } from 'node_modules/chart.js/dist/types/index.d';
import { Component, OnInit } from '@angular/core';
import { MonthlyContributionService } from 'src/app/core/services/dashboard/monthly-contribution.service';
import { MockApi } from 'src/app/shared/models/api-mock.models';

@Component({
  selector: 'app-monthly-contribution',
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less'],
})
export class MonthlyContributionComponent implements OnInit {
  chartData!: ChartData<'doughnut'>;
  accordionData!: MockApi['/monthly-contribution/contribution'];
  constructor(private contributionService: MonthlyContributionService) {}

  ngOnInit(): void {
    this.chartData = this.contributionService.getChartData();
    this.accordionData = this.contributionService.getDataLS()
  }
}
