import { PhotoService } from './../photo/photo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter = '';
  debounce: Subject<string> = new Subject<string>();

  hasMore = true;
  currentPage = 1;
  username = '';

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }


  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.username;

    this.photos = this.activatedRoute.snapshot.data.photos;

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  load(): void {
    this.currentPage++;
    
    this.photoService
      .listFromUserPaginated(this.username, this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
