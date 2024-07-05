/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exportComptes } from '../fn/compte-controller/export-comptes';
import { ExportComptes$Params } from '../fn/compte-controller/export-comptes';

@Injectable({ providedIn: 'root' })
export class CompteControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exportComptes()` */
  static readonly ExportComptesPath = '/comptes/getcompte';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportComptes()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportComptes$Response(params?: ExportComptes$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return exportComptes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportComptes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportComptes(params?: ExportComptes$Params, context?: HttpContext): Observable<void> {
    return this.exportComptes$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
