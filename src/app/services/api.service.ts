import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 addUser(newUser: User): Observable<any>{
  return this.http.post('https://67091a70af1a3998baa06303.mockapi.io/api/lnd/users',newUser);
 }

}
