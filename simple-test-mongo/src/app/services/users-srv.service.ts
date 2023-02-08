import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/i-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersSrvService {
  users?: IUser[];

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<IUser[]>('http://localhost:3000/' + 'users');
  }
  addUser(user: IUser) {
    return this.http.post<IUser>('http://localhost:3000/' + 'users', user);
  }
}
