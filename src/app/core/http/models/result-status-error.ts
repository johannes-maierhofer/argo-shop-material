import { ErrorInfo } from "../error-handling/error-info";
import { ResultStatus } from "./result";

export class ResultStatusError extends Error {
  constructor(
    public status: ResultStatus,
    public messages: string[]) {
    super();
  }

  toErrorInfo(): ErrorInfo {
    switch (this.status) {
      case ResultStatus.Invalid: {
        return {
          header: 'Invalid',
          message: this.messages.join(','),
          errorType: 'warning'
        };
      }
      case ResultStatus.NotFound: {
        return {
          header: 'Not found',
          message: this.messages.join(','),
          errorType: 'error'
        };
      }
      case ResultStatus.Gone: {
        return {
          header: 'Gone',
          message: this.messages.join(','),
          errorType: 'error'
        };
      }
    }

    return {
      header: 'Error',
      message: this.messages.join(','),
      errorType: 'error'
    };
  }
}
