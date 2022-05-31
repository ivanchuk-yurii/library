import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegisterFailureComponent} from "../register-failure/register-failure.component";
import {RegisterSuccessComponent} from "../register-success/register-success.component";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  public readonly formGroup = new FormGroup({
    type: new FormControl('login'),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private readonly dialogRef: MatDialogRef<AuthFormComponent>,
    private readonly authService: AuthService,
    private readonly dialog: MatDialog,
  ) { }

  submit(): void {
    this.authService.submit(this.formGroup.value)
      .pipe(
        catchError(error => {
          this.dialog.closeAll();
          this.dialog.open(RegisterFailureComponent);
          return throwError(error);
        }),
      )
      .subscribe(() => {
        this.dialog.closeAll();
        this.dialog.open(RegisterSuccessComponent);
      });
  }

}
