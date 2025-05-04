import { Injectable } from '@angular/core';
import { MOCK_API } from 'src/app/mocks/api.mock';
import { MockApi } from 'src/app/shared/models/api-mock.models';

type AccordionData = MockApi['/monthly-contribution/accordion'];

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  constructor() {}
  private readonly STORAGE_KEY = 'mock_accordion';

  setDataLS(): void {
    try {
      const mockAccordions: AccordionData =
        MOCK_API['/monthly-contribution/accordion'];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(mockAccordions));
    } catch (error) {
      console.error('Falha ao salvar no localStorage ', error);
      throw new Error('Dados inválidos para armazenamento');
    }
  }

  getDataLS(): AccordionData {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (!storedData) {
      this.setDataLS();
      return MOCK_API['/monthly-contribution/accordion'];
    }
    try {
      return JSON.parse(storedData) as AccordionData;
    } catch (error) {
      console.error('Falha ao ler dados do localStorage:', error);
      this.deleteDataLS();
      return [];
    }
  }

  deleteDataLS(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Falha ao limpar localStorage:', error);
    }
  }
}
