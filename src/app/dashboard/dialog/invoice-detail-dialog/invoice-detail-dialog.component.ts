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
}
