import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Layout } from '../../../core/services/layout';

@Component({
  selector: 'app-forgot-pass',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-pass.html',
  styleUrl: './forgot-pass.css',
})
export class ForgotPass {
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

  // verfy email
  sendEmail() {}
}
