import {Component, Input} from '@angular/core';
import {Founder} from "../founder.interface";

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss']
})
export class FounderComponent {
  @Input() founder!: Founder;

  constructor() { }
}
