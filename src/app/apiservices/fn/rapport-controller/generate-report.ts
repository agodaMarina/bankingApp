/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GenerateReport$Params {
  startDate: string;
  endDate: string;
  username: string;
}

export function generateReport(http: HttpClient, rootUrl: string, params: GenerateReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
  const rb = new RequestBuilder(rootUrl, generateReport.PATH, 'get');
  if (params) {
    rb.query('startDate', params.startDate, {});
    rb.query('endDate', params.endDate, {});
    rb.query('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<string>>;
    })
  );
}

generateReport.PATH = '/rapport/generate-report';
