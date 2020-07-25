import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ SignInComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
