// import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { of, tap } from 'rxjs';
// import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiURL = 'http://localhost:3000';
  private platformId = inject(PLATFORM_ID);

  currentUser = signal<string|null>(null);

  constructor() {
    if(isPlatformBrowser(this.platformId)) {
      this.currentUser.set(localStorage.getItem('token'))
    }
  }
  // constructor(private http: HttpClient) {}

  login(credentials: {email: string, password: string}) {
    // return this.http.post<{token: string}>(`${this.apiURL}/auth/login`, credentials)
    //   .pipe(
    //     tap(response => {
    //     localStorage.setItem('token', response.token);
    //     this.currentUser.set(response.token)
    //   })
    // );
    return of({ token: 'suzuki' }).pipe(
      tap((response) => {
        if(isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
        }
        this.currentUser.set(response.token);
      })
    );
  }

  logout() {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token')
    }
    this.currentUser.set(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser();
  }
}
