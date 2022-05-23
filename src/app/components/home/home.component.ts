import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthFormComponent} from "../../modules/auth/auth-form/auth-form.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly list = [
    { label: 'Books', path: 'books' },
    { label: 'Founders', path: 'founders' },
    { label: 'Documentation', path: 'doc' }
  ];

  constructor(
    private readonly dialog: MatDialog
  ) {
  }

  openAuth(): void {
    this.dialog.open(AuthFormComponent, { panelClass: 'custom-dialog-container' });
    (document.getElementById('myVideo') as HTMLVideoElement).play();
  }
}
