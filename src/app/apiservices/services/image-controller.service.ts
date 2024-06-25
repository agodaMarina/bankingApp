/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { downloadImage } from '../fn/image-controller/download-image';
import { DownloadImage$Params } from '../fn/image-controller/download-image';
import { uploadImage } from '../fn/image-controller/upload-image';
import { UploadImage$Params } from '../fn/image-controller/upload-image';

@Injectable({ providedIn: 'root' })
export class ImageControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadImage()` */
  static readonly UploadImagePath = '/images/saveImage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadImage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadImage$Response(params?: UploadImage$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadImage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadImage(params?: UploadImage$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  uplaodImage(formData: FormData): Observable<any> {
    return this.http.post(this.rootUrl+'/images/saveImage', formData);
  }

  /** Path part for operation `downloadImage()` */
  static readonly DownloadImagePath = '/images/{fileName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadImage$Response(params: DownloadImage$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return downloadImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downloadImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadImage(params: DownloadImage$Params, context?: HttpContext): Observable<{
}> {
    return this.downloadImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
