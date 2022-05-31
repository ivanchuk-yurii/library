import {Component, Input, OnInit} from '@angular/core';
import {BookInterface} from "../book.interface";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book!: BookInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
