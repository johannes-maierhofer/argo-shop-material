export enum ResultStatus {
  Ok = 200,
  NotFound = 404,
  Invalid = 400,
  Gone = 410,
  Error = 500,
  //Duplicate,
  Unauthorized = 401
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
