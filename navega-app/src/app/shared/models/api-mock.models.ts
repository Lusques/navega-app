interface LoginResponse {
  email: string;
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
interface AccordionMonthlyContributionItem {
  title: string;
  value: string;
}
type AccordionMonthlyContribution = AccordionMonthlyContributionItem[][];

export interface MockApi {
  '/auth': LoginResponse;
  '/monthly-contribution/chart': ChartData;
  '/monthly-contribution/accordion': AccordionMonthlyContribution;
}
