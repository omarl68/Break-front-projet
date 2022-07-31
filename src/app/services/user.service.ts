import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BaseService } from './base.service';

import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersUrl = `${BaseService.baseUrl}/users/`

  constructor(private http: HttpClient) { }




  getAllUsers() {
    return this.http.get<any>(this.usersUrl);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.usersUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.usersUrl + id)
  }

  addUser(user: any) {
    return this.http.post<any>(this.usersUrl, user);
  }

  updateUser(user: User) {
    return this.http.put<any>(this.usersUrl, user);
  }

  login(user: User) {
    return this.http.post<any>(this.usersUrl + 'login', user, {
      observe: 'response',
    });
  }


  isLoggedIn() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    let decodedToken: any;
    if (token) {
      decodedToken = helper.decodeToken(token);
      if (decodedToken.role == 'client') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isLoggedInAsAdmin() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    let decodedToken: any;
    if (token) {
      decodedToken = helper.decodeToken(token);
      if (decodedToken.role == 'admin') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
