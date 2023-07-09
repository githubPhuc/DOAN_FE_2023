import { Component, OnInit } from '@angular/core';
import { DetailInvoiceComponent } from './detail-invoice/detail-invoice.component';
import { FormControl, FormGroup } from '@angular/forms';
import { InvoiceService } from './invoice.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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
    this.username = localStorage.getItem('username')!;
    this.invoiceService.GetList("").subscribe(res=>{
      this.Data=res.data;
      console.log(this.Data);
    })
      this.title="Invoice"

     
  }

 
  
//----------Search from-------------//
  searchForm = new FormGroup({
    code: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.invoiceService.GetList(form.value.codeBill).subscribe(res=>{
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
  if(window.confirm('Agree to confirm the order ?'))
  {
    this.invoiceService.acceptance(id,this.username).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
        this.toastr.ShowSuccess('Success!',dataT.message);
        return this.ngOnInit();
      }
      else{
        return this.toastr.ShowError('Error!',dataT.message);
      
      }
     
    });    
  }
  
}

}
