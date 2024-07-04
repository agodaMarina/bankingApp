import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../TokenServices/token.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService
  ) {}
   
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if(request.url.includes('/api/v1/auth/login')){
    //   return next.handle(request);
    // }
    const noAuthNeededRoutes = [
      '/api/v1/auth/login',
      '/api/v1/auth/register',
      // '/api/v1/auth/activate-account'
    ];
  

    if (noAuthNeededRoutes.some(url => request.url.includes(url))) {
      return next.handle(request);
    }
    
    const token = this.tokenService.token;
    if (token) {
      const authReq = request.clone({
        headers:request.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
