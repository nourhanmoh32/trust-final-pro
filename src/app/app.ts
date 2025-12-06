import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSec } from './features/hero-sec/hero-sec';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSec],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tajweed');
}
