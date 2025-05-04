import { MockApi } from '../shared/models/api-mock.models';

export const MOCK_API: MockApi = {
  '/auth': {
    identifier: 'user@navega.com',
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
  '/monthly-contribution/contribution': [
    { type: 'monthly', title: 'Valor da contribuição', value: 500, percent: 5 },
    { type: 'monthly', title: 'Valor da contribuição', value: 500, percent: 5 },
    { type: 'volunteer', title: 'Valor da contribuição', value: 500 },
  ],
};