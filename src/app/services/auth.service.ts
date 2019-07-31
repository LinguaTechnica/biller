import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serviceUrl = 'http://localhost:8080/api/session';
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    // TODO: HTTP status check needed?
    return this.http.put(this.serviceUrl, user)
      .pipe(
        tap(this.userHandler),
        catchError(of)
    );
  }

  logout() {
    // TODO: not working. why?
    return this.http.delete(this.serviceUrl)
      .pipe(
        tap(this.clearUser),
        catchError(of)
    );
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  private userHandler(response) {
    console.log('user handler', response);
    localStorage.setItem('currentUser', JSON.stringify({id: response.id, username: response.username}));
  }

  private clearUser(response) {
    console.log('logout');
    localStorage.removeItem('currentUser');
  }
}
