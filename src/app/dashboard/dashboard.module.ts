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



@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    ProCreateComponent,
    InvoiceComponent,
    InvoiceDetailDialogComponent,
    AccountComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
