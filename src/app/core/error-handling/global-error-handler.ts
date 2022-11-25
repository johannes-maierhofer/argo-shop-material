import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { ResultStatusError } from "../http/models/result-status-error";
import { NotifierService } from "../notifications/notifier.service";
import { ErrorInfo } from "./error-info";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private notifier: NotifierService,
    private ngZone : NgZone)
  { }

  handleError(error: Error | HttpErrorResponse) {
    let errorInfo: ErrorInfo = {
      header: 'An error occurred',
      message: error.message,
      errorType: "error"
    };

    if (error instanceof HttpErrorResponse) {
      errorInfo.message = error.message || error.error;
      errorInfo.header = 'The server returned an error';
    }

    if (error instanceof ResultStatusError) {
      errorInfo = error.toErrorInfo();
    }

    console.error("Error from global error handler", error);

    // The handleError function is executed outsize of an Angular zone.
    // You need to explicitly tell Angular to run the pop call within the context of a zone.
    // see https://stackoverflow.com/questions/51444006/why-does-toaster-service-inside-global-error-handler-wont-work-in-angular4-5-6
    this.ngZone.run(() => {
      this.notifier.showError(errorInfo.message || "This operation resulted in an error", errorInfo.header);
    });
  }
}


