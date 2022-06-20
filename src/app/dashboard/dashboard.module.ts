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
import { AdminCreateComponent } from './account/admin-create/admin-create.component';
import { ImportComponent } from './import/import.component';
import { ImportCreComponent } from './import/import-cre/import-cre.component';
import { AddImportComponent } from './dialog/add-import/add-import.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierCreateComponent } from './supplier/supplier-create/supplier-create.component';
import { ImportDetailComponent } from './dialog/import-detail/import-detail.component';

import { NgxPaginationModule } from 'ngx-pagination';

import { NgxStarRatingModule } from 'ngx-star-rating';
import { TrademarkComponent } from './trademark/trademark.component';
import { EditBrandComponent } from './dialog/edit-brand/edit-brand.component';

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
    AdminCreateComponent,
    ImportComponent,
    ImportCreComponent,
    AddImportComponent,
    SupplierComponent,
    SupplierCreateComponent,
    ImportDetailComponent,
    TrademarkComponent,
    EditBrandComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxStarRatingModule
  ]
})
export class DashboardModule { }
