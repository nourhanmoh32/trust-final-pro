import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    rememberMe: [false]
  })

  
  get email(){
    return this.profileForm.controls.email;
  }
  get password(){
    return this.profileForm.controls.password;
  }

  submiting(){
    if (this.profileForm.invalid){
      this.profileForm.markAllAsTouched();
      return;
    }
    //in case of valid form
    console.log("form value: ", this.profileForm.value);
    
    // api

    //routing to home sec
    this.router.navigate(['/home'])
  }
}
