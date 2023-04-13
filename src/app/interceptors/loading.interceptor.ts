import { LoadingService } from './../services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.show();

    return this.handler(next, request);
  }

  handler(next: HttpHandler, request: HttpRequest<unknown>) {
    return next.handle(request).pipe(
      tap({
        next: (request) => {
          // debugger;
          if (
            request instanceof HttpResponse &&
            request.status == HttpStatusCode.Ok
          ) {
            this.loadingService.hide();
          }
        },
        error: (err: HttpErrorResponse) => {
          this.loadingService.reset();
          console.error(err);
        },
        finalize: () => this.loadingService.reset(),
      })
    );
  }
}
