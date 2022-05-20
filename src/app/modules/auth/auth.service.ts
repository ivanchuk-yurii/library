import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  submit(userData: { login: string; password: string; }): Observable<string> {
    return this.http.post<string>('', userData);
  }
}
