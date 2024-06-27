import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpTokenInterceptor } from './interceptor/http-token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpTokenInterceptor,
      multi:true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
