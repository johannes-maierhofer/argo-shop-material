export enum ResultStatus {
  Success = 1,
  NotFound = 2,
  Invalid = 3,
  Gone = 4,
  Error = 5
  //Duplicate,
  //Unauthorized,
}

export interface Result<T> {
  status: ResultStatus;
  messages: string[];
  data: T
}

export const isResultEnvelope = (data: any) => {
  return data.hasOwnProperty('status')
    && data.hasOwnProperty('messages')
};
