import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: '/users', pathMatch: 'full'
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    }
];