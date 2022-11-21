import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient)
  { }

  login(email: string, password: string): Observable<object> {
    const url: string = `${environment.apiUrl}/authentication/login`;
    return this.http.post<object>(
      url,
      {
        username: email,
        password: password,
        grantType: 'password'
      });
  }
}
