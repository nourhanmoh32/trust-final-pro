import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Layout } from '../../../core/services/layout';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  private fb = inject(FormBuilder);
  private authApi = inject(AuthService);
  private router = inject(Router);
  private showingNav = inject(Layout);

  // hidding navbar
  constructor() {
    this.showingNav.showNavbar.set(false);
  }
  ngOnDestroy(): void {
    this.showingNav.showNavbar.set(true);
  }

  registerForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    age: [''],
    phone: [''],
    gender: [''],
    country: [''],
    rememberMe: [false],
  });

  get fullName() {
    return this.registerForm.get('fullName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get rememberMe() {
    return this.registerForm.get('rememberMe')?.value;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.authApi.register(this.registerForm.value).subscribe((user) => {
      if (this.authApi.currentUser()?.token) {
        alert('تم التسجيل بنجاح! 🎉');
        this.router.navigate(['/home']);
      } else {
        alert('حدث خطأ أثناء التسجيل');
      }
    });
  }
}
