import '@angular/compiler';
import { AuthService } from './auth.service';
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  const mockCredentials = {
    identifier: 'user@navega.com',
    password: '123456',
  };

  let localStorageMock: { [key: string]: string } = {};
  beforeAll(() => {
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      localStorageMock[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn(
      (key) => localStorageMock[key] || null
    );
    global.Storage.prototype.removeItem = jest.fn((key) => {
      delete localStorageMock[key];
    });
    global.Storage.prototype.clear = jest.fn(() => {
      localStorageMock = {};
    });
  });

  beforeEach(() => {
    service = new AuthService();
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar true e armazenar o token quando as credenciais forem válidas', (done) => {
    service.login(mockCredentials).subscribe({
      next: (result) => {
        expect(result).toBe(true);
        expect(localStorageMock['auth_token']).toBe('mock-jwt-token');
        done();
      },
      error: () => fail('Não deveria retornar erro'),
    });
  });

  it('deve retornar erro quando as credenciais forem inválidas', (done) => {
    service.login({ ...mockCredentials, password: 'wrong' }).subscribe({
      next: () => fail('Deveria ter retornado erro'),
      error: (err) => {
        expect(err.message).toBe('Credenciais inválidas');
        done();
      },
    });
  });

  it('deve verificar corretamente o status de autenticação', () => {
    expect(service.isAuthenticated()).toBe(false);

    localStorage.setItem('auth_token', 'mock-jwt-token');
    expect(service.isAuthenticated()).toBe(true);
  });

  it('deve remover o token ao fazer logout', () => {
    localStorage.setItem('auth_token', 'mock-jwt-token');
    service.logout();
    expect(localStorageMock['auth_token']).toBeUndefined();
  });
});
