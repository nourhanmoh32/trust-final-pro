import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private fb = inject(FormBuilder);
  private authApi = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberMe: [false],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')?.value;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const loginData = {
      email: this.email?.value,
      password: this.password?.value
    };

    this.authApi.login(loginData, this.rememberMe).subscribe(user => {
      if (this.authApi.currentUser()?.token) {
        alert(` مرحبًا ${this.authApi.currentUser()?.fullName} `);
        this.router.navigate(['/home']);
      } else {
        alert('البريد الإلكتروني أو الرقم السري خطأ');
      }
      // if (user?.token) {
      //   this.router.navigate(['/home']);
      // } else {
      //   alert('الإيميل أو الباسورد غلط');
      // }
    });
  }
}
