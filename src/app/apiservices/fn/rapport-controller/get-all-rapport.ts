/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Rapport } from '../../models/rapport';

export interface GetAllRapport$Params {
}

export function getAllRapport(http: HttpClient, rootUrl: string, params?: GetAllRapport$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Rapport>>> {
  const rb = new RequestBuilder(rootUrl, getAllRapport.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Rapport>>;
    })
  );
}

getAllRapport.PATH = '/rapport/getAllReports';
