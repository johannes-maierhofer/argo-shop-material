export interface PagedResult<T> {
  items: Array<T>;
  currentPage: number;
  pageSize: number;
  pageCount: number;
  totalItemCount: number;
}

export class PagedResultMapper<T> {

  constructor(private itemMapper: (data: any) => T) { }

  mapFrom = (data: any): PagedResult<T> => {
    const items: Array<any> = data.items;
    const mappedItems = items.map<T>(i => this.itemMapper(i));
    return {
      items: mappedItems,
      currentPage: data.page,
      pageSize: data.pageSize,
      pageCount: data.pageCount,
      totalItemCount: data.totalItemCount
    };
  }
}
