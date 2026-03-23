import { Routes } from '@angular/router';
import { Interests } from './pages/interests/interests';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: '', component: Home},
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {path: 'login', component: Login},
    {
        path: 'interests', 
        component: Interests,
        canActivate: [authGuard]
    },
];
