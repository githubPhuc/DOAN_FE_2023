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
    this.invoiceService.thongKe(form.value.start,form.value.end).subscribe(data=>{
      if(data.inv[0]!=null)
      {
        this.isSta=true;
      }
      this.invoice=data.inv;
      this.importTotal=data.importTotal;
      this.saleTotal=data.saleTotal;
      this.importQuantily=data.importQuantily;
      this.saleQuantily=data.saleQuantily;
    });
  }

}
