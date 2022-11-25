import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResult } from './../../../../core/http/models/paged-result';
import { ApiService } from './../../../../core/http/services/api.service';
import { ProductListItem } from './../models/product-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }

  getList(query: GetListQuery): Observable<PagedResult<ProductListItem>>{
    return this.api.get<PagedResult<ProductListItem>>('/catalog/product/getlist', query);
  }

}

export interface GetListQuery {
  page: number;
  pageSize: number;
  filterText?: string;
}
