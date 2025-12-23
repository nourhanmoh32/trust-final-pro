import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Layout } from '../../core/services/layout';

@Component({
  selector: 'app-hero-sec',
  imports: [RouterLink],
  templateUrl: './hero-sec.html',
  styleUrl: './hero-sec.css',
})
export class HeroSec {
  private showingNav = inject(Layout);

  // hidding navbar
  constructor() {
    
    this.showingNav.showNavbar.set(false);
  }
  ngOnDestroy(): void {
    this.showingNav.showNavbar.set(true);
  }
}
