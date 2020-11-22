import { Injectable } from '@angular/core';
import { DEFAULT_AUTH_TOKEN } from '../config/Config'
@Injectable({ providedIn: 'root' })
export class TokenStorage {
  private tokenKey =  DEFAULT_AUTH_TOKEN;

  signOut(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.clear();
  }

  saveToken(token?: string): void {
    if (!token) return;
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
