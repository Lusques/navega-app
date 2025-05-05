export type ContributionType = 'monthly' | 'volunteer';
export interface LoginResponse {
  identifier: string;
  password: string;
}
export interface ChartData {
  datasets: {
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
    data: number[];
  }[];
}
export interface ContributionsItem {
  type: ContributionType;
  title: string;
  value: number;
  percent?: number;
}

export interface MockApi {
  '/auth': LoginResponse;
  '/monthly-contribution/chart': ChartData;
  '/monthly-contribution/contribution': ContributionsItem[];
}
