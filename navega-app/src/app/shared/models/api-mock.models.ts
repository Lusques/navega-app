import { ChartData } from 'chart.js';

export type ContributionType = 'monthly' | 'volunteer';
export interface LoginResponse {
  identifier: string;
  password: string;
}
export interface ContributionsItem {
  type: ContributionType;
  value: number;
  percent?: number;
}

export interface MockApi {
  '/auth': LoginResponse;
  '/monthly-contribution/chart': ChartData<'doughnut'>;
  '/monthly-contribution/contribution': ContributionsItem[];
}
