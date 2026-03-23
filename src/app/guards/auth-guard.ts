import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Auth } from '../services/auth';

export const authGuard = () => {
  const authService = inject(Auth);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // 1. If we are on the Server, allow the route to render
  if (!isPlatformBrowser(platformId)) {
    return true; 
  }

  // 2. Now we are in the Browser, check the real token
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};