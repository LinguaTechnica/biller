import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serviceUrl = 'http://localhost:8080/api/session';
  constructor(private http: HttpClient) { }

  get() {
    return of({name: 'jody', email: 'jody@ex.co'});
  }
  login(user) {
    // TODO: HTTP status check needed?
    return this.http.post(this.serviceUrl, user)
      .pipe(
        map(result => {
          localStorage.setItem('currentUser', JSON.stringify(result));
        }),
        catchError(err => of(err))
    );
  }

  logout() {
    return this.http.delete(this.serviceUrl)
      .pipe(
        map(result => {
          localStorage.removeItem('currentUser');
        }),
        catchError(err => of(err))
    );
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
