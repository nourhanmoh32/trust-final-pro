import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authApi = inject(AuthService);
  const router = inject(Router); 

  if(!authApi.currentUser()){
    router.navigate(['/login']);
    return false;
  }
  return true;
};
