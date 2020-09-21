import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private url = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }
  login(user) {
    return this.httpClient.post<any>(this.url + 'login', user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  logedin() {
    return !!localStorage.getItem('token');
  }

  gettoken() {
    return localStorage.getItem('token');
  }


}
