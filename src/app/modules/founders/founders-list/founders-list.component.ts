import { Component } from '@angular/core';
import {Founder} from "../founder.interface";

@Component({
  selector: 'app-founders-list',
  templateUrl: './founders-list.component.html',
  styleUrls: ['./founders-list.component.scss']
})
export class FoundersListComponent {
  readonly list: Founder[] = [
    { name: 'Nikita Hotsiy', role: 'doing something', icon: 'nikita-hotsiy.jpg' },
    { name: 'Marko Andrusiak', role: 'doing something', icon: 'marko-andrusiak.jpg' },
    { name: 'Ihor Berehovskyi', role: 'doing something', icon: 'ihor-berehovskyi.png' },
    { name: 'Yura Korolyk', role: 'doing something', icon: 'yura-korolyk.png' },
    { name: 'Danya Hwan', role: 'doing something', icon: 'danya-hwan.jpg' },
    { name: 'Yaroslav Dnistryan', role: 'doing something', icon: 'yaroslav-dnistryan.jpg' },
  ];

  constructor() { }
}
