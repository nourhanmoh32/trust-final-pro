import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Layout } from '../../../core/services/layout';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-verfy-code',
  imports: [ReactiveFormsModule],
  templateUrl: './verfy-code.html',
  styleUrl: './verfy-code.css',
})
export class VerfyCode {
  fb = inject(FormBuilder);
  private showingNav = inject(Layout);
  private router = inject(Router);

  // hidding navbar
  constructor() {
    this.showingNav.showNavbar.set(false);
  }
  ngOnDestroy(): void {
    this.showingNav.showNavbar.set(true);
  }

  codeForm = this.fb.group({
    code1: ['', [Validators.required, Validators.pattern('[0-9]')]],
    code2: ['', [Validators.required, Validators.pattern('[0-9]')]],
    code3: ['', [Validators.required, Validators.pattern('[0-9]')]],
    code4: ['', [Validators.required, Validators.pattern('[0-9]')]],
  });

  verify() {
    if (this.codeForm.valid) {
      const code = Object.values(this.codeForm.value).join('');
      console.log('Code:', code);
      alert('تم تأكيد الرمز بنجاح! 🎉');

      this.router.navigate(['/home']);
    } else {
      alert('من فضلك أدخل الرموز كاملة!! 🚫');
    }
  }
 
  cancel() {
    this.router.navigate(['/forgotPass']);
  }
}
