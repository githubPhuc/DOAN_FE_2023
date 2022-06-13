import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { CommentComponent } from './comment/comment.component';
import { DashboardComponent } from './dashboard.component';
import { InvoiceConfirmComponent } from './invoice/invoice-confirm/invoice-confirm.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProCreateComponent } from './product/pro-create/pro-create.component';
import { ProDetailComponent } from './product/pro-detail/pro-detail.component';
import { ProEditComponent } from './product/pro-edit/pro-edit.component';
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
  //product
  {
    path: 'product',
    component: ProductComponent
  },{
    path: 'product/pro-detail/:id',
    component: ProDetailComponent
  },
  {
    path: 'product/pro-edit/:id',
    component: ProEditComponent
  },
  {
    path: 'product/create',
    component: ProCreateComponent
  },
  //invoice
  {
    path: 'invoice',
    component: InvoiceComponent
  },{
    path: 'invoice/confirm',
    component: InvoiceConfirmComponent
  },
  //account
  {
    path: 'account',
    component: AccountComponent
  },
  //comment
  {
    path: 'comment',
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
