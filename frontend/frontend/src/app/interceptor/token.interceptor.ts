import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  requestHeaders = new HttpHeaders();

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authService.getToken().pipe(
        mergeMap((token: String | null | undefined) => {
            
            if (token) {
                // clone and modify the request
                request = request.clone({
                  headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                  }),
                });
            }
            
            return next.handle(request);
    }));
  }


}
