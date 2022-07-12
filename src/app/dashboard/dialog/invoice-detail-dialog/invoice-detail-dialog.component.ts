import { Component, Inject, OnInit } from '@angular/core';
import { InvoiceService } from '../../invoice/invoice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-invoice-detail-dialog',
  templateUrl: './invoice-detail-dialog.component.html',
  styleUrls: ['./invoice-detail-dialog.component.scss']
})
export class InvoiceDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
                                        private invser:InvoiceService,
                                        private dialogR:DialogService,
                               
                                        ) { }

  data1:any;
  data2:any;
  ngOnInit(): void {

    this.invser.getInvoiceDetail(this.data.id).subscribe(data=>{
      this.data1=data;
    });
    this.invser.getInvoice(this.data.id).subscribe(data=>{
      this.data2=data;
    })
  }

  closeDialog()
  {
 
   this.dialogR.closeDialog();
   
  }
  sts:number=0;
  choose(id:string)
  {
    if(id=='0')
    {
      this.sts=0;
    }
    if(id=='1')
    {
      this.sts=1;
    }
    if(id=='2')
    {
      this.sts=2;
    }
    if(id=='3')
    {
      this.sts=3;
    }

    
  }
  save()
  {
    if(this.sts==0)
    {
      this.dialogR.closeDialog();
      return;
    }
    this.invser.changeStatus(this.data.id,this.sts).subscribe(res=>{
      if(res.status==200)
      {
        this.dialogR.closeDialog();
        location.reload();
      }
    });
  }
}
