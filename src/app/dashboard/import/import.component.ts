import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from '../dialog.service';
import { InvoiceService } from '../invoice/invoice.service';
import { ImportService } from './import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  invoice:any;
  staForm=new FormGroup({
    start: new FormControl(''),
    end: new FormControl('')
  });
  constructor(private invoiceSrvice:InvoiceService,private dialog:DialogService,private importSer:ImportService) { }

  ngOnInit(): void {

    this.invoiceSrvice.getImportInvoice().subscribe(data=>{
      this.invoice=data;
    })
  }
  view(id:number)
  {
      this.dialog.opentImportDetail(id);
  }
  onSubmit(form:FormGroup)
  {
    this.importSer.filter(form.value.start,form.value.end).subscribe(res=>{
      this.invoice=res;
    })
  }

}
