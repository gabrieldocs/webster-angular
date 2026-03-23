import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);
  private router = inject(Router);

  loginData = {
    email: '',
    password: ''
  }

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: () => {
        this.router.navigate(['/interests']);
      },
      error: (err) => {
        console.error('Login failed', err)
        alert('Invalid credentials')
      }
    })
  }
}
