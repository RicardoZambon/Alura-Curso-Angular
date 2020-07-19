import { PhotoService } from './photos/photo/photo.service';
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

  constructor(photoService: PhotoService) {
    photoService
    .listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }
}
