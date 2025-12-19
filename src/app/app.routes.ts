import { Routes } from '@angular/router';
import { HeroSec } from './features/hero-sec/hero-sec';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home';
import { Exams } from './features/exams/exams';
import { Register } from './features/auth/register/register';
import { ForgotPass } from './features/auth/forgot-pass/forgot-pass';
import { VerfyCode } from './features/auth/verfy-code/verfy-code';
import { authGuard } from './core/guards/auth-guard';
import { LessonsDash } from './features/lessons/lessons-dash/lessons-dash';

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
    path: 'lessonsDash',
    loadComponent: () => import('./features/lessons/lessons-dash/lessons-dash').then(m => m.LessonsDash)
  },
  
  {
    path: 'lesson1',
    loadComponent: () =>
      import('./features/lessons/lesson1/lesson1').then(m => m.Lesson1)
  },

  {
    path: 'lesson2',
    loadComponent: () =>
      import('./features/lessons/lesson2/lesson2').then(m => m.Lesson2)
  },
  {
    path: 'exams',
    component: Exams,
  },
];
