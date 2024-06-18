import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('../../core/modules/user/routes/lib.routes').then((m) => m.layutRoutes),
  }
];
