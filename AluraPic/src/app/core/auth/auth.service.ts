import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
      return this.http.post(`${environment.apiURL}user/login`, { userName: username, password})
  }
}
