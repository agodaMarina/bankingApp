/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteRapport } from '../fn/rapport-controller/delete-rapport';
import { DeleteRapport$Params } from '../fn/rapport-controller/delete-rapport';
import { generateRapport } from '../fn/rapport-controller/generate-rapport';
import { GenerateRapport$Params } from '../fn/rapport-controller/generate-rapport';
import { generateReport } from '../fn/rapport-controller/generate-report';
import { GenerateReport$Params } from '../fn/rapport-controller/generate-report';
import { getAllRapport } from '../fn/rapport-controller/get-all-rapport';
import { GetAllRapport$Params } from '../fn/rapport-controller/get-all-rapport';
import { getRapport } from '../fn/rapport-controller/get-rapport';
import { GetRapport$Params } from '../fn/rapport-controller/get-rapport';
import { Rapport } from '../models/rapport';
import { updateRapport } from '../fn/rapport-controller/update-rapport';
import { UpdateRapport$Params } from '../fn/rapport-controller/update-rapport';

@Injectable({ providedIn: 'root' })
export class RapportControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateRapport()` */
  static readonly UpdateRapportPath = '/rapport/updateRapport';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRapport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRapport$Response(params: UpdateRapport$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateRapport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRapport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRapport(params: UpdateRapport$Params, context?: HttpContext): Observable<void> {
    return this.updateRapport$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `generateRapport()` */
  static readonly GenerateRapportPath = '/rapport/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateRapport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateRapport$Response(params: GenerateRapport$Params, context?: HttpContext): Observable<StrictHttpResponse<Rapport>> {
    return generateRapport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateRapport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateRapport(params: GenerateRapport$Params, context?: HttpContext): Observable<Rapport> {
    return this.generateRapport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Rapport>): Rapport => r.body)
    );
  }

  /** Path part for operation `getRapport()` */
  static readonly GetRapportPath = '/rapport/getRapport/{date}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRapport()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRapport$Response(params: GetRapport$Params, context?: HttpContext): Observable<StrictHttpResponse<Rapport>> {
    return getRapport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRapport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRapport(params: GetRapport$Params, context?: HttpContext): Observable<Rapport> {
    return this.getRapport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Rapport>): Rapport => r.body)
    );
  }

  /** Path part for operation `getAllRapport()` */
  static readonly GetAllRapportPath = '/rapport/getAllReports';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllRapport()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRapport$Response(params?: GetAllRapport$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Rapport>>> {
    return getAllRapport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllRapport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRapport(params?: GetAllRapport$Params, context?: HttpContext): Observable<Array<Rapport>> {
    return this.getAllRapport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Rapport>>): Array<Rapport> => r.body)
    );
  }

  /** Path part for operation `generateReport()` */
  static readonly GenerateReportPath = '/rapport/generate-report';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateReport$Response(params: GenerateReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return generateReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateReport(params: GenerateReport$Params, context?: HttpContext): Observable<Array<string>> {
    return this.generateReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `deleteRapport()` */
  static readonly DeleteRapportPath = '/rapport/deleteRapport/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRapport()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRapport$Response(params: DeleteRapport$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRapport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRapport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRapport(params: DeleteRapport$Params, context?: HttpContext): Observable<void> {
    return this.deleteRapport$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
