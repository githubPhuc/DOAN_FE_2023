import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account/account.service';
import { InvoiceService } from './invoice/invoice.service';
import { ProductService } from './product/product.service';
import { SupplierService } from './supplier/supplier.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  product:any;
  account:any;
  invoice:any;
  sup:any;
  sta:any;
  constructor(private router:Router,
              private productService:ProductService,
              private accountService:AccountService,
              private invoiceService:InvoiceService,
              private supService:SupplierService) { }

  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/'+'auth/login']); 
    }

    this.accountService.getAllAccount().subscribe(data=>{
      this.account=data.count;
    });
    this.productService.getAllProduct().subscribe(data=>{
      this.product=data.count;
    });
    this.invoiceService.getAllInvoice().subscribe(data=>{
      this.invoice=data.count;
    });
    this.supService.getAllSupplier().subscribe(data=>{
      this.sup=data.count;
    });
    this.invoiceService.getDash().subscribe(res=>{
      this.sta=res;
    });
  }

}
