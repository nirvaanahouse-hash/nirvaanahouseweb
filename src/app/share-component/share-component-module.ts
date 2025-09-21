import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { AdminRoutingModule } from "../admin/admin-routing-module";
import { Footer } from './footer/footer';



@NgModule({
  declarations: [
    Header,
    Footer
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
], exports: [Header,Footer]
})
export class ShareComponentModule { }
