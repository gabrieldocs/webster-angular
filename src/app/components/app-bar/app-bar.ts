import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-app-bar',
  imports: [RouterLink],
  templateUrl: './app-bar.html',
  styleUrl: './app-bar.css',
})
export class AppBar {
  auth = inject(Auth)
  router = inject(Router);
  handleLogout() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
