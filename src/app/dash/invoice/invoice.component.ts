import { Component, OnInit } from '@angular/core';
import { DetailInvoiceComponent } from './detail-invoice/detail-invoice.component';
import { FormControl, FormGroup } from '@angular/forms';
import { InvoiceService } from './invoice.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AcceptanceInvComponent } from './acceptance-inv/acceptance-inv.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent   implements OnInit {
  closeResult = '';
  constructor(private invoiceService:InvoiceService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    Data:any;
    title:any;
    username:any;
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.invoiceService.GetList("","").subscribe(res=>{
      this.Data=res.data;
      console.log(this.Data);
    })
      this.title="Invoice"

     
  }

 
  
//----------Search from-------------//
  searchForm = new FormGroup({
    code: new FormControl(''),
    Status: new FormControl(''),
  });
  public Search(form:FormGroup) {
    
    this.invoiceService.GetList(form.value.codeBill,form.value.Status).subscribe(res=>{
      return this.Data=res.data;
    })
  }

public detail(id:number)
{
  console.log(id)
  this.dialog.open(DetailInvoiceComponent,{
    data : {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '600ms',
      name : 'Detail Invoice',
      id:id,
    }
  });
  
}
public acceptance(id:number)
{
  console.log(id)
  this.dialog.open(AcceptanceInvComponent,{
    data : {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '600ms',
      name : 'Detail Invoice',
      id:id,
    }
  });
  
}


}
