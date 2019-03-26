import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

 readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset = utf-8',
    })
  };

  getArticles(pageSize, page, filter): Observable<any> {
    const url = environment.apiUrl + '/articles?page_size=' + pageSize + '&page=' + page + '&filter=' + filter;
    return this.http.get(url, this.httpOptions);
  }

  getFilterIndex(pageSize, page, filter): Observable<any> {
    const url = environment.apiUrl + '/articles?page_size=' + pageSize + '&page=' + page + '&filter=' + filter;
    return this.http.get(url, this.httpOptions);
  }




}