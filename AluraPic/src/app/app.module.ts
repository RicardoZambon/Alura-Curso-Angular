import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    PhotosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
