import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura Pic';

  photos: object[] = [];

  constructor(http: HttpClient) {
    http
      .get<object[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => this.photos = photos);
  }
}
