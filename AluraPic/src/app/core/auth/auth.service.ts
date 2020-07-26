import { TokenService } from './../token/token.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  authenticate(username: string, password: string): Observable<any> {
      return this.http
        .post(
          `${environment.apiURL}user/login`,
          { userName: username, password},
          { observe: 'response' })
        .pipe(tap(res => {
          this.tokenService.setToken(res.headers.get('x-access-token'));
        }))
  }
}
