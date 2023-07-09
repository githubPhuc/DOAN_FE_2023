import { Component, Inject, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-invoice',
  templateUrl: './detail-invoice.component.html',
  styleUrls: ['./detail-invoice.component.scss']
})
export class DetailInvoiceComponent implements OnInit {

  NameWeb;
  id;
  dataDetail:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private invoiceService:InvoiceService,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name;
                                          this.id=data.id;
                                        }
  
  ngOnInit(): void {
    this.invoiceService.GetListDetail(this.id).subscribe(res => {
      this.dataDetail=res.data;
      console.log(this.dataDetail);
    })
  }
}
