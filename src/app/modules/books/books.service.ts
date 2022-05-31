import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {BookInterface} from "./book.interface";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getBooks(): Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>(`${environment.api}/books`);
  }
}
