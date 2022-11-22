import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ResultStatusError } from "../result-status-error";
import { isResultEnvelope, ResultStatus } from './../result';

@Injectable()
export class ResultEnvelopeInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (isResultEnvelope(event.body)) {
          const status: ResultStatus = event.body.status;
          if (status === ResultStatus.Success) {
            // unwrap data from envelope
            if (event.body.hasOwnProperty('data')) {
              return event.clone({ body: event.body.data });
            }
            else
              return event;
          } else {
            throw new ResultStatusError(status, event.body.messages);
          }
        }
      }
      return event;
    }));
  }
}
