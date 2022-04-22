import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:2900/api/users';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  //Add user

  addTodo(data: Todo): Observable<any> {
    const res = this.httpClient.post(this.REST_API, data);
    console.log(res);
    return res;
  }

  getTodos() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  deleteTodo(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders });
  }

  updateToogle(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.REST_API}/${id}`, data);
  }
}
