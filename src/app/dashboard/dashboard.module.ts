import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProCreateComponent } from './product/pro-create/pro-create.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceDetailDialogComponent } from './dialog/invoice-detail-dialog/invoice-detail-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { ProDetailComponent } from './product/pro-detail/pro-detail.component';
import { ProEditComponent } from './product/pro-edit/pro-edit.component';
import { EditCategoryComponent } from './dialog/edit-category/edit-category.component';
import { InvoiceConfirmComponent } from './invoice/invoice-confirm/invoice-confirm.component';
import { AddressInfoComponent } from './dialog/address-info/address-info.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './dialog/add-comment/add-comment.component';
import { RepCommentComponent } from './dialog/rep-comment/rep-comment.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    ProCreateComponent,
    InvoiceComponent,
    InvoiceDetailDialogComponent,
    AccountComponent,
    ProDetailComponent,
    ProEditComponent,
    EditCategoryComponent,
    InvoiceConfirmComponent,
    AddressInfoComponent,
    CommentComponent,
    AddCommentComponent,
    RepCommentComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
