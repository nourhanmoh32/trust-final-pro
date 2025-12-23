import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Layout } from '../../core/services/layout';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  authApi = inject(AuthService);
  router = inject(Router);
  private showingNav = inject(Layout);

  // hidding navbar
  constructor() {
    this.showingNav.showNavbar.set(false);
  }
  ngOnDestroy(): void {
    this.showingNav.showNavbar.set(true);
  }

  logout() {
    this.authApi.logout();
    this.router.navigate(['/login']);
  }
}
