import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

interface UserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  submit(userData: UserData & { type: 'login' | 'register' }): Observable<string> {
    switch (userData.type) {
      case 'login':
        return this.login(userData);
      case 'register':
        return this.register(userData);
    }
  }

  private login(userData: UserData): Observable<string> {
    return this.http.post<string>(`${environment.api}/login`, {
      username: userData.email,
      password: userData.password
    });
  }

  private register(userData: UserData): Observable<string> {
    return this.http.post<string>(`${environment.api}/registration`, {
      "fullName" : "Yurii",
      "email" : userData.email,
      "birthday": "2000-01-10",
      "password": userData.password
    });
  }
}
