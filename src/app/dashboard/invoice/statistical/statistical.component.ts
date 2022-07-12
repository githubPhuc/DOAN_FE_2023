import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from '../../dialog.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent implements OnInit {

  POSTS:any
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  tkThang:boolean=false;
  re:any;
  invoice:any;
  saleTotal:any;
  importTotal:any;
  importQuantily:any;
  saleQuantily:any;
  isSta:boolean=false;
  staForm=new FormGroup({
    start: new FormControl(''),
    end: new  FormControl('')
  });
  constructor(private invoiceService:InvoiceService,private dialog:DialogService) { }

  ngOnInit(): void {
  }

  openDialog(id:number)
  {
    this.dialog.opentDialog(id);
  }
  onSubmit(form:FormGroup)
  {
    this.invoiceService.thongKeKhoang(form.value.start,form.value.end).subscribe(data=>{
    
      this.invoice=data;
      // this.importTotal=data.importTotal;
      // this.saleTotal=data.saleTotal;
      // this.importQuantily=data.importQuantily;
      // this.saleQuantily=data.saleQuantily;
      this.fetchPosts();
    });
  }
  reset()
  {
    this.POSTS.lst=[];
    this.POSTS.nhap=0;
    this.POSTS.ban=0;
    this.POSTS.totaln=0;
    this.POSTS.totalb=0;
 
  }
  thongKe(id:string)
  {
    if(id=='0')
    {
        return;
    }
    if(id=='1')
    {

   this.tkThang=false;
    this.invoiceService.thongKeTuan().subscribe(res=>{
      
      this.invoice=res;

      this.fetchPosts();
    })

  }
  if(id=='2')
  {
    this.tkThang=true;
  }
  }
  thongKeThang(id:string)
  {
    this.isSta=false;
    this.invoiceService.thongKeThang(id).subscribe(res=>{
      this.invoice=res;

      this.fetchPosts();
    });
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
    this.POSTS=this.invoice;
  }
}
