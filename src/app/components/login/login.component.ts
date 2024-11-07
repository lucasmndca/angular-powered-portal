import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false

  loginFormGroup = new FormGroup({
    email: new FormControl({ value: '', disabled: this.loading }, [Validators.required, Validators.email]),
    password: new FormControl({ value: '', disabled: this.loading }, Validators.required)
  })

  snackbarProps: MatSnackBarConfig = {
    duration: 4000, verticalPosition: 'bottom', horizontalPosition: 'left'
  }

  constructor(private loginService: LoginService, private _snackBar: MatSnackBar, private router: Router) { }

  onSubmit() {
    this.loading = true
    this.loginService
      .login(this.loginFormGroup.value as ICredentials)
      .subscribe({
        next: (session) => {
          this.loading = false
          this._snackBar.open(`You're logged in!`, 'Close', this.snackbarProps)
          sessionStorage.setItem('session', JSON.stringify(session))
          this.router.navigate(['/portal'])
        },
        error: ({ error }) => this._snackBar.open(error, 'Close', this.snackbarProps)
      })
  }
}
