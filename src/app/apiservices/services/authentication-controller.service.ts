/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { activeAccount } from '../fn/authentication-controller/active-account';
import { ActiveAccount$Params } from '../fn/authentication-controller/active-account';
import { AuthenticationResponse } from '../models/authentication-response';
import { changePassword } from '../fn/authentication-controller/change-password';
import { ChangePassword$Params } from '../fn/authentication-controller/change-password';
import { getProfile } from '../fn/authentication-controller/get-profile';
import { GetProfile$Params } from '../fn/authentication-controller/get-profile';
import { login } from '../fn/authentication-controller/login';
import { Login$Params } from '../fn/authentication-controller/login';
import { register } from '../fn/authentication-controller/register';
import { Register$Params } from '../fn/authentication-controller/register';
import { updateProfile } from '../fn/authentication-controller/update-profile';
import { UpdateProfile$Params } from '../fn/authentication-controller/update-profile';
import { User } from '../models/user';
import { AuthenticateRequest } from '../models/authenticate-request';

@Injectable({ providedIn: 'root' })
export class AuthenticationControllerService extends BaseService {
  
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateProfile()` */
  static readonly UpdateProfilePath = '/auth/updateProfile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile$Response(params: UpdateProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile(params: UpdateProfile$Params, context?: HttpContext): Observable<string> {
    return this.updateProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<{
}> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.rootUrl}/auth/logout`, {});
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: Login$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }


  loginuser(authRequest: AuthenticateRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.rootUrl}/auth/login`, authRequest, {
      observe: 'body',  // Option pour observer le corps de la réponse
      responseType: 'json'  // Option pour s'assurer que la réponse est interprétée comme JSON
    });
  }


  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/auth/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: ChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: ChangePassword$Params, context?: HttpContext): Observable<string> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  getAll(): Observable<Array<User>> {
    throw new Error('Method not implemented.');
  }
  /** Path part for operation `getProfile()` */
  static readonly GetProfilePath = '/auth/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Response(params?: GetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile(params?: GetProfile$Params, context?: HttpContext): Observable<User> {
    return this.getProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }
  getProfileuser():Observable<User>{
    return this.http.get<User>(`${this.rootUrl}/auth/profile`)

  }

  /** Path part for operation `activeAccount()` */
  static readonly ActiveAccountPath = '/auth/activate_account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `activeAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  activeAccount$Response(params: ActiveAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return activeAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `activeAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  activeAccount(params: ActiveAccount$Params, context?: HttpContext): Observable<void> {
    return this.activeAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
