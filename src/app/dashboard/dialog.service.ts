import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef, _closeDialogVia} from '@angular/material/dialog';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { InvoiceDetailDialogComponent } from './dialog/invoice-detail-dialog/invoice-detail-dialog.component';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog1:MatDialog) { }


  opentDialog(id:number)
  {

   this.dialog1.open(InvoiceDetailDialogComponent,{
    height: '500px',
    width: '800px',
    data: {
      'id': id
    }
  }
  );
}
openDialogConfirm(content:string)
  {

   this.dialog1.open(ConfirmComponent,{
    height: '200px',
    width: '400px',
    data: {
      'content': content
    }
  }
  );
}

closeDialog(id:number)
{

 this.dialog1.closeAll();

}

}

