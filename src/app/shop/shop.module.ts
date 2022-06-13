import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailProComponent } from './detail-pro/detail-pro.component';
import {NgPipesModule} from 'ngx-pipes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    WishlistComponent,
    ProfileComponent,
    DetailProComponent,
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgPipesModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ShopModule { }
