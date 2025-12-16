import { Routes } from '@angular/router';
import { HeroSec } from './features/hero-sec/hero-sec';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home';
import { Lessons } from './features/lessons/lessons';
import { Exams } from './features/exams/exams';
import { Register } from './features/auth/register/register';
import { ForgotPass } from './features/auth/forgot-pass/forgot-pass';
import { VerfyCode } from './features/auth/verfy-code/verfy-code';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: HeroSec,
  },
  {
    path: 'login',
    loadComponent:() => import('./features/auth/login/login').then(l => l.Login),
  },
  {
    path: 'forgotPass',
    component: ForgotPass,
  },
  {
    path: 'verfyCode',
    component: VerfyCode,
  },

  {
    path: 'register',
    component: Register,
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    canActivate: [authGuard],
  },
  {
    path: 'lessons',
    component: Lessons,
  },
  {
    path: 'exams',
    component: Exams,
  },
];
