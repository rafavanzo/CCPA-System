import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = '/api/usuarios/protected';

  constructor(private http: HttpClient) { }

  checkSession(): Observable<any> {
    return this.http.get(this.API_URL, { responseType: 'text' });
  }

  logout(): Observable<any> {
    return this.http.post('/api/usuarios/logout', null, { responseType: 'text' });
  }

  isLoggedIn(): Observable<boolean> {
    return new Observable(observer => {
      this.checkSession().subscribe({
        next: result => {
          observer.next(true);
          observer.complete();
        },
        error: error => {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}
