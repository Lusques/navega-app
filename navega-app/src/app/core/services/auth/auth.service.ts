import { Injectable } from '@angular/core';
import { MOCK_API } from '../../../mocks/api.mock';
import { Observable, of, throwError } from 'rxjs';
import { MockApi } from 'src/app/shared/models/api-mock.models';

type Credentials = MockApi['/auth'];
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'auth_token';
  private readonly MOCK_TOKEN = 'mock-jwt-token';

  constructor() {}
  login(credentials: Credentials): Observable<boolean> {
    try {
      const mockUser = MOCK_API['/auth'];
      const isValidUser =
        credentials.identifier === mockUser.identifier &&
        credentials.password === mockUser.password;

      if (isValidUser) {
        localStorage.setItem(this.AUTH_TOKEN_KEY, this.MOCK_TOKEN);
        return of(true);
      } else {
        return throwError(() => new Error('Credenciais inválidas'));
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      return throwError(() => new Error('Erro no servidor'));
    }
  }

  logout(): void {
    try {
      localStorage.removeItem(this.AUTH_TOKEN_KEY);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  isAuthenticated(): boolean {
    try {
      return !!localStorage.getItem(this.AUTH_TOKEN_KEY);
    } catch (error) {
      console.error('Erro ao fazer autenticação:', error);
      return false;
    }
  }

  getToken(): string | null {
    try {
      return localStorage.getItem(this.AUTH_TOKEN_KEY);
    } catch (error) {
      console.error('Erro ao recuperar Token: ', error);
      return null;
    }
  }
}
