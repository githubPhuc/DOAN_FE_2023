import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { InvoiceDetailDialogComponent } from './dialog/invoice-detail-dialog/invoice-detail-dialog.component';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog1:MatDialog) { }


  opentDialog(id:number)
  {
    console.log(id);
   this.dialog1.open(InvoiceDetailDialogComponent,{
    height: '500px',
    width: '800px',
    data: {
      id: id
    }
  }
  );

}


}