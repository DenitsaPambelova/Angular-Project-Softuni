import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import { AuthenticationModule } from './components/authentication/authentication.module';
import { SharedModule } from './components/shared/shared.module';
import { LandingModule } from './components/landing/landing.module';
import { UsersModule } from './components/users/users.module';

import { AppComponent } from './app.component';

import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

import { AuthenticationService } from './core/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    SharedModule,
    LandingModule,
    UsersModule
  ],
  providers: [
    AuthenticationService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
        
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
        
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
