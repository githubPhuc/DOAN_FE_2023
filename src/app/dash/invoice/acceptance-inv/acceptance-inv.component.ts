import { Component, Inject, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acceptance-inv',
  templateUrl: './acceptance-inv.component.html',
  styleUrls: ['./acceptance-inv.component.scss']
})
export class AcceptanceInvComponent implements OnInit {

  NameWeb;
  id;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private invoiceService:InvoiceService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name,
    this.id=data.id
  }
  Data:any;
  username:any;
  
  ngOnInit(): void {
    this.username = localStorage.getItem('username')!;
  }
  acceptanceVal = new FormGroup({
    Status: new FormControl(''),
  });
  public acceptance(form:FormGroup)
  {
    if(form.value.Status==null||form.value.Status==''||form.value.Status=='undefined')
      {
        return this.toastr.ShowError('Status is null!',' Please check again!');
        
      }
    if(window.confirm('Agree to confirm the order ?'))
    {
      this.invoiceService.acceptance(this.id,this.username,form.value.Status).subscribe((dataT: { status: any; message: any; }) => {
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.message);
          return this.ngOnInit();
        }
        else{
          return this.toastr.ShowError('Error!',dataT.message);
        
        }
      
      });    
    }
    
  }
}
