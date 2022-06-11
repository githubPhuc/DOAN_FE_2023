import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,

  ]
})
export class ShopModule { }
