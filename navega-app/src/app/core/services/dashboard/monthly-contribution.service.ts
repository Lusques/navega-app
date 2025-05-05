import { Injectable } from '@angular/core';
import { MOCK_API } from 'src/app/mocks/api.mock';
import { MockApi } from 'src/app/shared/models/api-mock.models';

type ContributionData = MockApi['/monthly-contribution/contribution'];
type ChartData = MockApi['/monthly-contribution/chart'];

@Injectable({
  providedIn: 'root',
})
export class MonthlyContributionService {
  constructor() {
    this.deleteDataLS();
    this.initializeData();
  }

  private readonly STORAGE_KEY = 'mock_monthly_contribution';
  private readonly MOCK_API_DATA =
    MOCK_API['/monthly-contribution/contribution'];

  private getStoredData(): ContributionData {
    try {
      const storedData = localStorage.getItem(this.STORAGE_KEY);
      return storedData ? [...JSON.parse(storedData)] : [...this.MOCK_API_DATA];
    } catch (error) {
      console.error('Erro ao ler localStorage:', error);
      return [...this.MOCK_API_DATA];
    }
  }
  private initializeData(): void {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.setDataLS();
    }
  }

  setDataLS(): void {
    try {
      const mockContributions: ContributionData = this.MOCK_API_DATA;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(mockContributions));
    } catch (error) {
      console.error('Falha ao salvar no localStorage ', error);
      throw new Error('Dados inválidos para armazenamento');
    }
  }

  getDataLS(): ContributionData {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (!storedData) {
      this.setDataLS();
      return this.getStoredData();
    }
    try {
      return this.getStoredData();
    } catch (error) {
      console.error('Falha ao ler dados do localStorage:', error);
      return [...this.MOCK_API_DATA];
    }
  }

  deleteDataLS(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Falha ao limpar localStorage:', error);
    }
  }

  getChartData(): ChartData {
    const data = this.getStoredData();

    const monthlySum = data
      .filter((item) => item.type === 'monthly')
      .reduce((sum, item) => sum + item.value, 0);

    const volunteerSum = data
      .filter((item) => item.type === 'volunteer')
      .reduce((sum, item) => sum + item.value, 0);

    return {
      datasets: [
        {
          backgroundColor: ['#594CBE', '#E22E6F'],
          borderColor: ['transparent'],
          borderWidth: 0,
          data: [monthlySum, volunteerSum],
        },
      ],
    };
  }

  getMonthlyContributions(): ContributionData {
    return this.getStoredData().filter((item) => item.type === 'monthly');
  }

  getVolunteerContributions(): ContributionData {
    return this.getStoredData().filter((item) => item.type === 'volunteer');
  }
}
