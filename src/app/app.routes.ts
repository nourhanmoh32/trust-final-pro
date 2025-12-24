import { Routes } from '@angular/router';
import { HeroSec } from './features/hero-sec/hero-sec';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home';
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
    loadComponent: () => import('./features/auth/login/login').then((l) => l.Login),
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
    loadComponent: () =>
      import('./features/lessons/lessons-dash/lessons-dash').then((m) => m.LessonsDash),
    canActivate: [authGuard],
  },

  {
    path: 'lesson1',
    loadComponent: () => import('./features/lessons/lesson1/lesson1').then((m) => m.Lesson1),
    canActivate: [authGuard],
  },

  {
    path: 'lesson2',
    loadComponent: () => import('./features/lessons/lesson2/lesson2').then((m) => m.Lesson2),
    canActivate: [authGuard],
  },
  
   {
    path: 'lesson3',
    loadComponent: () => import('./features/lessons/lesson2/lesson2').then((m) => m.Lesson2),
    canActivate: [authGuard],
  },

  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile').then((m) => m.Profile),
    canActivate: [authGuard],
  },

  {
    path: 'exam1',
    loadComponent: () => import('./features/exams/exam1/exam1').then((m) => m.Exam1),
    canActivate: [authGuard],
  },
  {
    path: 'exam2',
    loadComponent: () => import('./features/exams/exam2/exam2').then((m) => m.Exam2),
    canActivate: [authGuard],
  },
];
