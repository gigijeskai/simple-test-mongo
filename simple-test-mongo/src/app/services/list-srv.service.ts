import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class ListSrvService {
  users?: User[];
  constructor() {}
  // getData(): Observable<any> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');

  addUser(user: User) {
    this.users?.push(user);
    console.log(this.users);
  }
}
