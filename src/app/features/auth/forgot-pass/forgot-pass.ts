import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Layout } from '../../../core/services/layout';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-forgot-pass',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './forgot-pass.html',
  styleUrl: './forgot-pass.css',
})
export class ForgotPass {
  private authApi = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private showingNav = inject(Layout);

  // hidding navbar
  constructor() {
    this.showingNav.showNavbar.set(false);
  }
  ngOnDestroy(): void {
    this.showingNav.showNavbar.set(true);
  }

  forgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get email() {
    return this.forgotForm.get('email');
  }

  // verfy email
  sendEmail() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    const enterEmail = this.forgotForm.get('email')?.value;

    this.authApi.checkEmail(enterEmail!).subscribe({
      next: (user) => {
        if (user) {
          alert(`تم العثور على حسابك، سنرسل الرمز الآن..`);
          this.router.navigate(['/verfyCode']);
        }
      },
      error: (err) => {
        alert('عذراً، هذا البريد الإلكتروني غير مسجل لدينا.');
        console.error('حدث خطأ في البريد الإلكتروني', err);
      },
    });
  }
}
