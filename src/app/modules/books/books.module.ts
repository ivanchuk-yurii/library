import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import {BooksRoutingModule} from "./books-routing.module";
import { BookComponent } from './book/book.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    BooksListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatButtonModule
  ]
})
export class BooksModule { }
