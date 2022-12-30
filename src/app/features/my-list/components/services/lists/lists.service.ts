/* eslint-disable no-underscore-dangle */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ListItem } from '../../../interfaces/list-items/list-item';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getLists(id: number): Observable<any> {
    return this.http.get(`${environment.serverUrl}/list/${id}`);
  }

  getListItems(id: number): Observable<any> {
    return this.http.get(`${environment.serverUrl}/list_item/${id}`);
  }

  createList(user) {
    return this.http.post(`${environment.serverUrl}/user`, user);
  }

  updateList(item) {
    return this.http.put(`${environment.serverUrl}/list_item/${item.id}`, item);
  }

  deleteList(user) {
    return this.http.delete(`${environment.serverUrl}/user/${user.id}`);
  }

  // private handleError(err: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if(err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occoured ${err.error.message}`;
  //   } else {
  //     errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(() => errorMessage);
  // }
}
