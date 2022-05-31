import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books = [
    {
      "title": "Harry Potter 1",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg",
      "description": "lorem ipum lorem ipum lorem ipukjjlorem ipum lorem ipum",
      "mainAuthorId": 3,
      "coAuthorsIds": [
        2,
        4
      ],
      "yearOfPublication": "2010",
      "amount": 3
    },
    {
      "title": "Harry Potter 1",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg",
      "description": "lorem ipum lorem ipum lorem ipukjjlorem ipum lorem ipum",
      "mainAuthorId": 3,
      "coAuthorsIds": [
        2,
        4
      ],
      "yearOfPublication": "2010",
      "amount": 3
    },
    {
      "title": "Harry Potter 1",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg",
      "description": "lorem ipum lorem ipum lorem ipukjjlorem ipum lorem ipum",
      "mainAuthorId": 3,
      "coAuthorsIds": [
        2,
        4
      ],
      "yearOfPublication": "2010",
      "amount": 3
    },
    {
      "title": "Harry Potter 1",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg",
      "description": "lorem ipum lorem ipum lorem ipukjjlorem ipum lorem ipum",
      "mainAuthorId": 3,
      "coAuthorsIds": [
        2,
        4
      ],
      "yearOfPublication": "2010",
      "amount": 3
    },
    {
      "title": "Harry Potter 1",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg",
      "description": "lorem ipum lorem ipum lorem ipukjjlorem ipum lorem ipum",
      "mainAuthorId": 3,
      "coAuthorsIds": [
        2,
        4
      ],
      "yearOfPublication": "2010",
      "amount": 3
    },
  ];

  constructor(
    private readonly booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(console.log)
  }

}
