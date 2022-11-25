import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResult } from './../../../../core/http/models/paged-result';
import { ApiService } from './../../../../core/http/services/api.service';
import { ProductDetailsItem } from './../models/product-details-item';
import { ProductListItem } from './../models/product-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }

  getList(query: GetListQuery): Observable<PagedResult<ProductListItem>>{
    return this.api.get<PagedResult<ProductListItem>>('/catalog/product/getlist', query);
  }

  getDetails(query: GetDetailsQuery): Observable<ProductDetailsItem>{
    return this.api.get<ProductDetailsItem>('/catalog/Product/GetDetails/' + query.id);
  }

}

export interface GetListQuery {
  page: number;
  pageSize: number;
  filterText?: string;
}

export interface GetDetailsQuery {
  id: number;
}
