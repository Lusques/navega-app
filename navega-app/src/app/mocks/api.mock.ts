import { MockApi } from '../shared/models/api-mock.models';

export const MOCK_API: MockApi = {
  '/auth': {
    email: 'user@navega.com',
    password: '123456',
  },
  '/monthly-contribution/chart': {
    datasets: [
      {
        backgroundColor: ['#594CBE', '#E22E6F'],
        borderColor: ['transparent'],
        borderWidth: 0,
        data: [100, 40],
      },
    ],
  },
  '/monthly-contribution/accordion': [
    [
      {
        title: 'Valor da contribuição',
        value: 'R$ 500,00',
      },
      {
        title: 'Valor da contribuição',
        value: 'R$ 500,00',
      },
    ],
    [
      {
        title: 'Valor da contribuição',
        value: 'R$ 500,00',
      },
    ],
  ],
};
