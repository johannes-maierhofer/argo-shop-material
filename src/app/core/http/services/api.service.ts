import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient)
  { }

  get<T>(path: string, params?: any): Observable<T> {
    const url = this.createUrl(path);
    const httpParams = this.createHttpParams(params);
    return this.httpClient.get<T>(url, { params: httpParams });
  }

  post<T>(path: string, data?: any): Observable<T> {
    const url = this.createUrl(path);
    return this.httpClient.post<T>(url, data);
  }

  postForm<T>(path: string, data?: any): Observable<T> {
    const url = this.createUrl(path);
    const formData = this.createFormData(data);
    return this.httpClient.post<T>(url, formData);
  }

  put<T>(path: string, data?: any): Observable<T> {
    const url = this.createUrl(path);
    return this.httpClient.put<T>(url, { params: data });
  }

  delete(path: string): Observable<object> {
    const url = this.createUrl(path);
    return this.httpClient.delete(url);
  }

  private createUrl(path: string) {
    return environment.apiUrl + path;
  }

  private createHttpParams(values: any): HttpParams {
    let params = new HttpParams();
    if (!values) return params;

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        const value = values[key];
        if (value === undefined || value === null) continue;
        params = params.set(key, value + '');
      }
    }
    return params;
  }

  private createFormData(data: any): FormData {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
      // replace null and undefined with empty string
      const value = data[key] ?? '';
      formData.set(key, value);
    }

    return formData;
  }
}
