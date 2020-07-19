import { Photo } from './photo';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) { }

  listFromUser(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(API + username + '/photos');
  }
}
