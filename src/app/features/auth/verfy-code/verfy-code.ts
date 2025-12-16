import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verfy-code',
  imports: [ReactiveFormsModule],
  templateUrl: './verfy-code.html',
  styleUrl: './verfy-code.css',
})
export class VerfyCode {

  fb = inject(FormBuilder);

  codeForm = this.fb.group({
    d1: [''],
    d2: [''],
    d3: [''],
    d4: [''],
  });

  verify() {
    const code = Object.values(this.codeForm.value).join('');
    console.log('Code:', code);
  }
}


