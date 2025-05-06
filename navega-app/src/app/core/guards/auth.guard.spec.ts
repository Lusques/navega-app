import '@angular/compiler';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceMock: { isAuthenticated: jest.Mock };

  beforeEach(() => {
    authServiceMock = { isAuthenticated: jest.fn() };
    const routerMock = { parseUrl: jest.fn((url) => url) };
    guard = new AuthGuard(authServiceMock as any, routerMock as any);
  });

  it('deve permitir acesso se autenticado', () => {
    authServiceMock.isAuthenticated.mockReturnValue(true);
    expect(guard.canActivate({} as any, {} as any)).toBe(true);
  });

  it('deve redirecionar se não autenticado', () => {
    authServiceMock.isAuthenticated.mockReturnValue(false);
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBe('/auth');
  });
});
