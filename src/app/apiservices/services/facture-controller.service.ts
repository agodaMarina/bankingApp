/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ajoutFactureManuelle } from '../fn/facture-controller/ajout-facture-manuelle';
import { AjoutFactureManuelle$Params } from '../fn/facture-controller/ajout-facture-manuelle';
import { deleteFacture } from '../fn/facture-controller/delete-facture';
import { DeleteFacture$Params } from '../fn/facture-controller/delete-facture';
import { Facture } from '../models/facture';
import { getFacture } from '../fn/facture-controller/get-facture';
import { GetFacture$Params } from '../fn/facture-controller/get-facture';

@Injectable({ providedIn: 'root' })
export class FactureControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ajoutFactureManuelle()` */
  static readonly AjoutFactureManuellePath = '/facture/addFacture';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajoutFactureManuelle()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajoutFactureManuelle$Response(params: AjoutFactureManuelle$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return ajoutFactureManuelle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajoutFactureManuelle$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajoutFactureManuelle(params: AjoutFactureManuelle$Params, context?: HttpContext): Observable<void> {
    return this.ajoutFactureManuelle$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getFacture()` */
  static readonly GetFacturePath = '/facture/getFacture';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFacture$Response(params?: GetFacture$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Facture>>> {
    return getFacture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFacture(params?: GetFacture$Params, context?: HttpContext): Observable<Array<Facture>> {
    return this.getFacture$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Facture>>): Array<Facture> => r.body)
    );
  }

  /** Path part for operation `deleteFacture()` */
  static readonly DeleteFacturePath = '/facture/deleteFacture/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFacture$Response(params: DeleteFacture$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteFacture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFacture(params: DeleteFacture$Params, context?: HttpContext): Observable<void> {
    return this.deleteFacture$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
