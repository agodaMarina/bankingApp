/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Achat } from '../models/achat';
import { addAchat } from '../fn/achat-controller/add-achat';
import { AddAchat$Params } from '../fn/achat-controller/add-achat';
import { deleteAchat } from '../fn/achat-controller/delete-achat';
import { DeleteAchat$Params } from '../fn/achat-controller/delete-achat';
import { getAchat } from '../fn/achat-controller/get-achat';
import { GetAchat$Params } from '../fn/achat-controller/get-achat';
import { getAllAchats } from '../fn/achat-controller/get-all-achats';
import { GetAllAchats$Params } from '../fn/achat-controller/get-all-achats';
import { updateAchat } from '../fn/achat-controller/update-achat';
import { UpdateAchat$Params } from '../fn/achat-controller/update-achat';

@Injectable({ providedIn: 'root' })
export class AchatControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateAchat()` */
  static readonly UpdateAchatPath = '/achat/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAchat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAchat$Response(params: UpdateAchat$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updateAchat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAchat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAchat(params: UpdateAchat$Params, context?: HttpContext): Observable<{
}> {
    return this.updateAchat$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addAchat()` */
  static readonly AddAchatPath = '/achat/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAchat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAchat$Response(params?: AddAchat$Params, context?: HttpContext): Observable<StrictHttpResponse<Achat>> {
    return addAchat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAchat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAchat(params?: AddAchat$Params, context?: HttpContext): Observable<Achat> {
    return this.addAchat$Response(params, context).pipe(
      map((r: StrictHttpResponse<Achat>): Achat => r.body)
    );
  }
  add(achat: Achat, file: Blob | undefined): Observable<Achat> {
    return this.http.post<Achat>(`${this.rootUrl}/achat/add`, {achat, file});
  }


  /** Path part for operation `getAchat()` */
  static readonly GetAchatPath = '/achat/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAchat()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAchat$Response(params: GetAchat$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAchat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAchat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAchat(params: GetAchat$Params, context?: HttpContext): Observable<{
}> {
    return this.getAchat$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllAchats()` */
  static readonly GetAllAchatsPath = '/achat/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAchats()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAchats$Response(params?: GetAllAchats$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllAchats(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllAchats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAchats(params?: GetAllAchats$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllAchats$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteAchat()` */
  static readonly DeleteAchatPath = '/achat/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAchat()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAchat$Response(params: DeleteAchat$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteAchat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAchat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAchat(params: DeleteAchat$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteAchat$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
