import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from './content-pages-routing.module';

import { LoginPageComponent } from './login/login-page.component';
import { ErrorPageComponent } from './error/error-page.component';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';



@NgModule({
  imports: [
    CommonModule,
    ContentPagesRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginPageComponent,
    ErrorPageComponent,
    ForgotPasswordPageComponent
  ]
})

export class ContentPagesModule {

  constructor() {
    console.log('lazy ContentPagesModule loaded');
  }
}
