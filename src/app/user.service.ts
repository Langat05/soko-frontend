import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  constructor(private http: HttpClient){ }

  registerNewUser(userData): Observable<any> {
    return this.http.post('https://user1api.herokuapp.com/api/register', userData);
  }

  loginUser(userData): Observable<any> {
    return this.http.post('https://user1api.herokuapp.com/api/login', userData);
  }

}