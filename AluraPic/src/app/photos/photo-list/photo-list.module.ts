import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from './../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from './../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from './../../shared/directives/darken-on-hover/dark-on-hover/dark-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    LoadButtonComponent,
    FilterByDescription,
    PhotosComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkOnHoverModule
  ]
})
export class PhotoListModule { }
