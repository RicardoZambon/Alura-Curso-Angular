import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [ SignInComponent ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
  ]
})
export class HomeModule { }
