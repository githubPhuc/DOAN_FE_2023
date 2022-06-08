import { Component, Inject, OnInit } from '@angular/core';
import { InvoiceService } from '../../invoice/invoice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-detail-dialog',
  templateUrl: './invoice-detail-dialog.component.html',
  styleUrls: ['./invoice-detail-dialog.component.scss']
})
export class InvoiceDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private invser:InvoiceService) { }

  data1:any;
  ngOnInit(): void {
    console.log(this.data.id);
    this.invser.getInvoiceDetail(2).subscribe(data=>{
      this.data1=data;
    });
  }

}
