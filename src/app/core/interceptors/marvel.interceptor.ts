import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleMarvelRequest(request, next);
  }

  handleMarvelRequest(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const timestamp = `${new Date().getTime()}`;
    const pubKey = `${environment.api_marvel_pub_key}`;
    const privKey = `${environment.api_marvel_priv_key}`;

    const requestWithHashAndTimestamp = request.clone({
      params: request.params
        .set('ts', timestamp)
        .set('hash', this.getMarvelHash(timestamp, privKey, pubKey))
        .set('apikey', pubKey)
    });
    return next.handle(requestWithHashAndTimestamp);
  }

  getMarvelHash(timestamp: string, privKey: string, pubKey: string): string {
    return Md5.hashStr(`${timestamp}${privKey}${pubKey}`);
  }
}
