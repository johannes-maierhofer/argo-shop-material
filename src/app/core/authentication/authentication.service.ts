import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationInfo } from './authentication-info';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private authInfo = new BehaviorSubject<AuthenticationInfo>({
    token: '',
    username: '',
    userId: ''
  });

  constructor(private http: HttpClient)
  { }

  isLoggedIn$ = this.isLoggedIn.asObservable();

  login(email: string, password: string): Observable<object> {
    const url: string = `${environment.apiUrl}/identity/authentication/login`;
    return this.http.post<AuthenticationInfo>(
      url,
      {
        username: email,
        password: password
      }).pipe(tap(authInfo => {
        this.isLoggedIn.next(true);
        this.authInfo.next(authInfo);
      }));
  }

  logout(): Observable<object> {
    const url: string = `${environment.apiUrl}/identity/authentication/logout`;
    return this.http.post<any>(url, {})
      .pipe(tap(_ => {
        this.isLoggedIn.next(false);
        this.authInfo.next({
          token: '',
          username: '',
          userId: ''
        });
      }));
  }
}
