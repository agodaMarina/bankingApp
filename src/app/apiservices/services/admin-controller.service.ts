/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { activeAccount } from '../fn/admin-controller/active-account';
import { ActiveAccount$Params } from '../fn/admin-controller/active-account';
import { desactiveAccount } from '../fn/admin-controller/desactive-account';
import { DesactiveAccount$Params } from '../fn/admin-controller/desactive-account';
import { getUser } from '../fn/admin-controller/get-user';
import { GetUser$Params } from '../fn/admin-controller/get-user';
import { getUsers } from '../fn/admin-controller/get-users';
import { GetUsers$Params } from '../fn/admin-controller/get-users';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AdminControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `activeAccount()` */
  static readonly ActiveAccountPath = '/admin/unlock/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `activeAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  activeAccount$Response(params: ActiveAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return activeAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `activeAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  activeAccount(params: ActiveAccount$Params, context?: HttpContext): Observable<string> {
    return this.activeAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `desactiveAccount()` */
  static readonly DesactiveAccountPath = '/admin/blockUser/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `desactiveAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  desactiveAccount$Response(params: DesactiveAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return desactiveAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `desactiveAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  desactiveAccount(params: DesactiveAccount$Params, context?: HttpContext): Observable<string> {
    return this.desactiveAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getUsers()` */
  static readonly GetUsersPath = '/admin/utilisateurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Response(params?: GetUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return getUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers(params?: GetUsers$Params, context?: HttpContext): Observable<Array<User>> {
    return this.getUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `getUser()` */
  static readonly GetUserPath = '/admin/utilisateur/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Response(params: GetUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser(params: GetUser$Params, context?: HttpContext): Observable<User> {
    return this.getUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

}
