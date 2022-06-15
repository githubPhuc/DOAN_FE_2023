import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { InvoiceService } from '../invoice/invoice.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  invoice:any;
  constructor(private invoiceSrvice:InvoiceService,private dialog:DialogService) { }

  ngOnInit(): void {

    this.invoiceSrvice.getImportInvoice().subscribe(data=>{
      this.invoice=data;
    })
  }


}
