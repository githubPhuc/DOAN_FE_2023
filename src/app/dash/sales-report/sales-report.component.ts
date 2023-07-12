import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InvoiceService } from '../invoice/invoice.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent   implements OnInit {
  closeResult = '';
  constructor(private invoiceService:InvoiceService,
              private toastr:NotifierService,
              private router:Router,
      ) { }
    Data:any;
    title:any;
    username:any;
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.username = localStorage.getItem('username')!;
    this.invoiceService.SalesReport("","").subscribe(res=>{
      this.Data=res.data;
      console.log(this.Data);
    })
      this.title="Invoice"

     
  }
 
  
//----------Search from-------------//
  searchForm = new FormGroup({
    start: new FormControl(''),
    End: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.invoiceService.SalesReport(form.value.start,form.value.End).subscribe(res=>{
      return this.Data=res.data;
    })
  }


}
