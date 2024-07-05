/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteVente } from '../fn/vente-controller/delete-vente';
import { DeleteVente$Params } from '../fn/vente-controller/delete-vente';
import { getAllVentes } from '../fn/vente-controller/get-all-ventes';
import { GetAllVentes$Params } from '../fn/vente-controller/get-all-ventes';
import { getVenteById } from '../fn/vente-controller/get-vente-by-id';
import { GetVenteById$Params } from '../fn/vente-controller/get-vente-by-id';
import { saveVente } from '../fn/vente-controller/save-vente';
import { SaveVente$Params } from '../fn/vente-controller/save-vente';
import { updateVente } from '../fn/vente-controller/update-vente';
import { UpdateVente$Params } from '../fn/vente-controller/update-vente';

@Injectable({ providedIn: 'root' })
export class VenteControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateVente()` */
  static readonly UpdateVentePath = '/vente/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateVente()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateVente$Response(params: UpdateVente$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updateVente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateVente$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateVente(params: UpdateVente$Params, context?: HttpContext): Observable<{
}> {
    return this.updateVente$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `saveVente()` */
  static readonly SaveVentePath = '/vente/validate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveVente()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveVente$Response(params?: SaveVente$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return saveVente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveVente$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveVente(params?: SaveVente$Params, context?: HttpContext): Observable<{
}> {
    return this.saveVente$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getVenteById()` */
  static readonly GetVenteByIdPath = '/vente/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVenteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVenteById$Response(params: GetVenteById$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getVenteById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVenteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVenteById(params: GetVenteById$Params, context?: HttpContext): Observable<{
}> {
    return this.getVenteById$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllVentes()` */
  static readonly GetAllVentesPath = '/vente/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllVentes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVentes$Response(params?: GetAllVentes$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllVentes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllVentes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVentes(params?: GetAllVentes$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllVentes$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteVente()` */
  static readonly DeleteVentePath = '/vente/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVente()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVente$Response(params: DeleteVente$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteVente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteVente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVente(params: DeleteVente$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteVente$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
