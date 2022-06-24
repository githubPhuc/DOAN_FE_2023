import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ShopLayoutComponent } from './layouts/shop-layout/shop-layout.component';

const routes: Routes = [
  {
    
      path: '',
      component: ShopLayoutComponent,
      children: [
        {
          path: 'shop',
          redirectTo: '/shop/home',
          pathMatch: 'full'
        },
        {
          path: 'shop',
          loadChildren: ()=>import('./shop/shop.module').then(m=>m.ShopModule)
        }
      ]
    },
    {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
      },
      {
        path: 'admin',
        loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
