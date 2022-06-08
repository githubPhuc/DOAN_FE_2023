import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { DialogService } from '../dialog.service';
import { InvoiceService } from './invoice.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  public invoice:any
  constructor(private dialogSer:DialogService, private responseIn:InvoiceService) { }

  ngOnInit(): void {
    this.responseIn.getAllInvoice().subscribe(data=>{
      this.invoice=data;
      console.log(data);
    });
  }

  openDialog(id:any)
  {
    this.responseIn.getInvoiceDetail(id).subscribe(data=>{
      console.log(data);
      this.dialogSer.opentDialog(data);
    });
    
  }
}
