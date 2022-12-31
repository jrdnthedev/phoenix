import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpcacheService } from '../services/httpcache/httpcache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: HttpcacheService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //pass along non-cacheable requests
    if(request.method !== 'GET') {
      this.cacheService.invalidateCache(request.url);
      return next.handle(request);
    }

    // attempt to retrieve a cached response
    const cachedResponse: HttpResponse<any> | undefined = this.cacheService.get(request.url);

    // return cached response
    if(cachedResponse) {
      console.log(`Returning a cached response: ${cachedResponse.url}`);
      console.log(cachedResponse);
      return of(cachedResponse);
    }

    // send request to server and add response to cache

    return next.handle(request).pipe(
      tap(event => {
        if(event instanceof HttpResponse) {
          console.log(`Adding item to cache: ${request.url, event}`);
          this.cacheService.put(request.url, event);
        }
      })
    );

  }
}
