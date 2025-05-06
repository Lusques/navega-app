import '@angular/compiler';
import { MonthlyContributionService } from './monthly-contribution.service';
// import { MOCK_API } from 'src/app/mocks/api.mock';
import { MOCK_API } from '../../../mocks/api.mock';
import { ContributionsItem } from 'src/app/shared/models/api-mock.models';

describe('MonthlyContributionService', () => {
  let service: MonthlyContributionService;
  const mockStorageKey = 'mock_monthly_contribution';
  const mockApiData = MOCK_API['/monthly-contribution/contribution'];

  beforeEach(() => {
    let storage: { [key: string]: string } = {};
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => storage[key] || null);
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => {
      storage[key] = value;
    });
    jest.spyOn(Storage.prototype, 'removeItem').mockImplementation((key) => {
      delete storage[key];
    });

    service = new MonthlyContributionService();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('deve carregar dados mockados quando localStorage está vazio', () => {
    const data = service.getDataLS();
    expect(data).toEqual(mockApiData);
    expect(localStorage.getItem).toHaveBeenCalledWith(mockStorageKey);
  });

  it('deve calcular corretamente os totais de contribuições', () => {
    const totals = service.getContributionsTotals();
    
    const expectedMonthly = mockApiData
      .filter(item => item.type === 'monthly')
      .reduce((sum, item) => sum + item.value, 0);
      
    const expectedVolunteer = mockApiData
      .filter(item => item.type === 'volunteer')
      .reduce((sum, item) => sum + item.value, 0);

    expect(totals.monthlySum).toBe(expectedMonthly);
    expect(totals.volunteerSum).toBe(expectedVolunteer);
    expect(totals.total).toBe(expectedMonthly + expectedVolunteer);
  });

  it('deve adicionar nova contribuição ao localStorage', () => {
    const newContribution: ContributionsItem = {
      type: 'monthly',
      value: 100,
      percent: 10
    };
  
    service.setNewContribution(newContribution as any);
    
    const storedData = JSON.parse(localStorage.getItem(mockStorageKey) || '[]');
    expect(storedData).toContainEqual(
      expect.objectContaining({
        type: 'monthly',
        value: 100,
        percent: 10
      })
    );
  });
});