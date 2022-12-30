import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.serverUrl}/user`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${environment.serverUrl}/user/${id}`);
  }

  createUser(user) {
    return this.http.post(`${environment.serverUrl}/user`, user);
  }

  updateUser(user) {
    return this.http.put(`${environment.serverUrl}/user/${user.id}`, user);
  }

  deleteUser(user) {
    return this.http.delete(`${environment.serverUrl}/user/${user.id}`);
  }

  // private async request(method: string, url: string, data?: any) {
  //   // const token = await this.oktaAuth.getAccessToken();

  //   const result = this.http.request(method, url, {
  //     body: data,
  //     responseType: 'json',
  //     observe: 'body',
  //     headers: {
  //       // authorization: `Bearer ${token}`
  //     }
  //   });
  //   return new Promise((resolve, reject) => {
  //     result.subscribe(resolve, reject);
  //   }).then(resolve => resolve);
  // }
}
