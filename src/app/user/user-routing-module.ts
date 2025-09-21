import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERouter } from '../enum/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: ERouter.home, component: Home },
      { path: '', pathMatch: 'full', redirectTo: ERouter.home }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
