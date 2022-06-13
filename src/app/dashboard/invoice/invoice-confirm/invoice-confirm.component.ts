import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../dialog.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-confirm',
  templateUrl: './invoice-confirm.component.html',
  styleUrls: ['./invoice-confirm.component.scss']
})
export class InvoiceConfirmComponent implements OnInit {

  constructor(private invService:InvoiceService,private dialogSer:DialogService) { }
  invoice:any;
  ngOnInit(): void {

    this.invService.getInvoiceConfirm().subscribe(data=>{
      this.invoice=data;
      console.log('ínv', data);
    })
  }
  openDialog(id:any)
  {

      this.dialogSer.opentDialog(id);
    
    
  }

  confirm(id:number)
  {
    this.invService.confirm(id).subscribe(data=>{
      location.reload();
    })
  }
}
