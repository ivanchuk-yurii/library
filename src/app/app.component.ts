import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthFormComponent} from "./modules/auth/auth-form/auth-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';

  constructor(
    private readonly dialog: MatDialog
  ) {
  }

  openAuth(): void {
    this.dialog.open(AuthFormComponent, { panelClass: 'custom-dialog-container' });
    (document.getElementById('myVideo') as HTMLVideoElement).play();
  }
}
