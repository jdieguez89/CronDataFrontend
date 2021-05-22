import {HttpParams} from '@angular/common/http';

export interface Pagination {
  page: number;
  size: number;
  sort: any;
}

export interface Search {
  query: string;
}

export interface SearchWithPagination extends Search, Pagination {
}

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort' && req[key] !== undefined && req[key] !== '' && req[key] !== null) {
        options = options.set(key, req[key]);
      }
    });
    if (req.sort) {
      options = options.append('sort', req.sort);
    }
  }
  return options;
};
