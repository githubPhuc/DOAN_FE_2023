import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { DialogService } from '../dialog.service';
import { InvoiceService } from './invoice.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  
  public invoice:any
  searchForm=new FormGroup({
    start: new FormControl(''),
    end: new FormControl('')
  });
  constructor(private dialogSer:DialogService, private responseIn:InvoiceService,private router : Router) { }

  ngOnInit(): void {
    this.responseIn.getAllInvoice().subscribe(data=>{
      this.invoice=data.inv;
      console.log(data);
      
    });
  }

  openDialog(id:any)
  {

      this.dialogSer.opentDialog(id);
    
    
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   goTo(location:string) { 
    this.router.navigate(['/'+location]); 
 } 

 complete(id:number)
 {
  this.responseIn.hoanThanh(id).subscribe(data=>{
    
  })
 }
 status:any;
 filter1(sts:number)
 {
    console.log('1');
    if(sts==1)
    {
      this.status=false;
    }else
    {
      this.status=true;
    }

    this.responseIn.getInvoiceByStatus(this.status).subscribe(res=>{
      this.invoice=res.inv;
    })
 }

 onSubmit(form:FormGroup)
 {
  this.responseIn.filter(form.value.start,form.value.end).subscribe(res=>{
    this.invoice=res.inv;
  })
 }

 reload()
 {
  this.responseIn.getAllInvoice().subscribe(data=>{
    this.invoice=data.inv;
    console.log(data);
    
  });
 }
 filt={

 }
 filter(sts:any)
 {
  this.responseIn.getInvoiceByStatus(sts).subscribe(res=>{
    this.invoice=res.inv;
  })
 }
}
