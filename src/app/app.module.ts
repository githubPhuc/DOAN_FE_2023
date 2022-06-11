import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopLayoutComponent } from './layouts/shop-layout/shop-layout.component';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './dashboard/dialog/confirm/confirm.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    ConfirmComponent,
    ShopLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmComponent]
  
})
export class AppModule { }
