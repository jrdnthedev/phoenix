/* eslint-disable no-underscore-dangle */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ListItem } from '../../../interfaces/list-items/list-item';
import { UserList } from '../../../interfaces/user-lists/user-lists';

@Injectable({
  providedIn: 'root'
})
export class UserListsService {
  private _url = 'https://xz6lp.wiremockapi.cloud/user-lists';
  private _list = '';

  constructor(private _http: HttpClient) { }

  getAllLists(): Observable<UserList[]>{
    return this._http.get<UserList[]>(this._url).pipe(
      tap(list => console.log('All',JSON.stringify(list))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occoured ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
