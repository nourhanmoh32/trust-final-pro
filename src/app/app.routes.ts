import { Routes } from '@angular/router';
import { HeroSec } from './features/hero-sec/hero-sec';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home';
import { Lessons } from './features/lessons/lessons';
import { Exams } from './features/exams/exams';
import { Register } from './features/auth/register/register';
import { ForgotPass } from './features/auth/forgot-pass/forgot-pass';

export const routes: Routes = [
  {
    path: '',
    component: HeroSec
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'forgotPass',
    component: ForgotPass
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'lessons',
    component: Lessons
  },
  {
    path: 'exams',
    component: Exams
  },
];
