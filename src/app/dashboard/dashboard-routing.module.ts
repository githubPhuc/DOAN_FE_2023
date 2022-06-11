import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './category/create/create.component';
import { DashboardComponent } from './dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProCreateComponent } from './product/pro-create/pro-create.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        
      }
    ]
  },
  //Category
  {
      path: 'category',
      component: CategoryComponent
   
  },
  {
    path: 'category/create',
    component: CreateComponent
  },
  //product
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/create',
    component: ProCreateComponent
  },
  //invoice
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  //account
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
