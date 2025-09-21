import { Routes } from '@angular/router';
import { ERouter } from './enum/router';

export const routes: Routes = [
    {
        path: ERouter.User,
        loadChildren: () => import('./user/user-module').then(m => m.UserModule)
    },
    {
        path: ERouter.Admin,
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
    },
    { path: '', pathMatch: 'full', redirectTo: ERouter.User }
];
