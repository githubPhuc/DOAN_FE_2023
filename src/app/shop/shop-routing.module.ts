import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailProComponent } from './detail-pro/detail-pro.component';
import { HomeComponent } from './home/home.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ShopComponent } from './shop.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'shop',
        component: HomeComponent,
        
      }
    ]
  },
  //home
  {
      path: 'home',
      component: HomeComponent
   
  },
  //cart
  {
    path: 'cart',
    component: CartComponent
 
}, 
 {
  path: 'wishlist',
  component: WishlistComponent

},
{
  path: 'profile',
  component: ProfileComponent

},

{
  path: 'product-detail/:id',
  component: DetailProComponent

},
{
  path: 'search/:txt',
  component: SearchComponent

},
{
  path: 'product/category/:txt',
  component: ProductByCategoryComponent

},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
