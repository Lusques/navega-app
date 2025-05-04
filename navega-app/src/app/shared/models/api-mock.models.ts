interface LoginResponse {
  identifier: string;
  password: string;
}
interface ChartData {
  datasets: {
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
    data: number[];
  }[];
}
interface ContributionsItem {
  type: 'monthly' | 'volunteer';
  title: string;
  value: number;
  percent?: number;
}

export interface MockApi {
  '/auth': LoginResponse;
  '/monthly-contribution/chart': ChartData;
  '/monthly-contribution/contribution': ContributionsItem[];
}