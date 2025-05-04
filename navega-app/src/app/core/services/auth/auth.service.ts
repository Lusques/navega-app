import { Injectable } from '@angular/core';
import { MOCK_API } from '../../../mocks/api.mock';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(identifier: string, password: string): Observable<boolean> {
    const mockUser = MOCK_API['/auth'];
    if (identifier === mockUser.email && password === mockUser.password) {
      const token = 'mock-jwt-token';
      localStorage.setItem('auth_token', token);
      return of(true);
    } else {
      return throwError(() => new Error('Credenciais inválidas'));
    }
  }
  logout(): void {
    localStorage.removeItem('auth_token');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
