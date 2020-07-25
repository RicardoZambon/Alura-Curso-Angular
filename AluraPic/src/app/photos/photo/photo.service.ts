import { environment } from './../../../environments/environment';
import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) { }

  listFromUser(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.apiURL}${username}/photos`);
  }

  listFromUserPaginated(username: string, page: number): Observable<Photo[]> {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(`${environment.apiURL}${username}/photos`, { params });
  }
}
