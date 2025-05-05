import { ChartData } from 'node_modules/chart.js/dist/types/index.d';
import { Component, OnInit } from '@angular/core';
import { MonthlyContributionService } from 'src/app/core/services/dashboard/monthly-contribution.service';
import { MockApi } from 'src/app/shared/models/api-mock.models';
import { ContributionTotals } from 'src/app/shared/models/contributions.model';

@Component({
  selector: 'app-monthly-contribution',
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less'],
})
export class MonthlyContributionComponent implements OnInit {
  chartData!: ChartData<'doughnut'>;
  chartColors!: string[];
  contributionTotals!: ContributionTotals;
  accordionData!: MockApi['/monthly-contribution/contribution'];
  constructor(private contributionService: MonthlyContributionService) {}

  ngOnInit(): void {
    this.chartData = this.contributionService.getChartData();
    this.chartColors = this.contributionService.getChartColors();
    this.contributionTotals = this.contributionService.getContributionsTotals();
    this.accordionData = this.contributionService.getDataLS();
  }

  DEBUGaddLS() {
    this.contributionService.setNewContribution({
      type: 'monthly',
      value: 100,
      percent: 5,
    });
    this.contributionService.setNewContribution({
      type: 'volunteer',
      value: 100,
      percent: 5,
    });
    window.location.reload();
  }
}
