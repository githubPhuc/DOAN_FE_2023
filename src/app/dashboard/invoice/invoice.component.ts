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
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  inv:any;
  tableSizes: any = [3, 6, 9, 12];
  status:any=0;
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
    this.fetchPosts();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.responseIn.getAllInvoice().subscribe(
      data => {
        this.POSTS = data.inv;
        console.log(data);

   
      }
      
    );
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
    if(data.status==200)
    {
      this.fetchPosts();
    }
  })
 }

 

 onSubmit(form:FormGroup)
 {
  this.responseIn.filter(form.value.start,form.value.end).subscribe(res=>{
    this.POSTS=res.inv;
    this.invoice=res.inv;
  })
 }

 reload()
 {
  this.responseIn.getAllInvoice().subscribe(data=>{
    this.POSTS=data.inv;
    console.log(data);
    
  });
 }
 filt={

 }
 filter(sts:any)
 {
  this.status=sts;
  if(sts==0)
  {
    this.responseIn.getAllInvoice().subscribe(data=>{
      this.invoice=data.inv;
      this.POSTS=data.inv;
      console.log(data);
      
    });
    return;
  }
  this.responseIn.getInvoiceByStatus(this.status).subscribe(res=>{
    this.POSTS=res.inv;
    this.invoice=res.inv;
    this.page=1;
  })
 }
}
