import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { ShareComponentModule } from '../share-component/share-component-module';


@NgModule({
  declarations: [
    Home,
    Layout,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareComponentModule
  ], exports: [Layout]
})
export class UserModule { }
