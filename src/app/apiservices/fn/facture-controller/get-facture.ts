/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Facture } from '../../models/facture';

export interface GetFacture$Params {
}

export function getFacture(http: HttpClient, rootUrl: string, params?: GetFacture$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Facture>>> {
  const rb = new RequestBuilder(rootUrl, getFacture.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Facture>>;
    })
  );
}

getFacture.PATH = '/facture/getFacture';
