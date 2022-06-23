import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef, _closeDialogVia} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AddCommentComponent } from './dialog/add-comment/add-comment.component';
import { AddImportComponent } from './dialog/add-import/add-import.component';
import { ConfirmDeleteComponent } from './dialog/confirm-delete/confirm-delete.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { EditCategoryComponent } from './dialog/edit-category/edit-category.component';
import { InvoiceDetailDialogComponent } from './dialog/invoice-detail-dialog/invoice-detail-dialog.component';
import { RepCommentComponent } from './dialog/rep-comment/rep-comment.component';
import { ShowSuccessComponent } from './dialog/show-success/show-success.component';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog1:MatDialog,private router:Router) { }


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

openDialogSuccess(content:string)
  {

   this.dialog1.open(ShowSuccessComponent,{
    height: '200px',
    width: '400px',
    data: {
      'content': content
    }
  }
  );
}
openDelete(content:string)
  {

   this.dialog1.open(ConfirmDeleteComponent,{
    height: '200px',
    width: '400px',
    data: {
      'content': content
    }
  }
  );

}
openDialogEditCate(id:number)
  {

   this.dialog1.open(EditCategoryComponent,{
    height: '150px',
    width: '400px',
    data: {
      'id': id
    }
  }
  );
}

openDialogAddComment(id:number)
  {

   this.dialog1.open(AddCommentComponent,{
    height: '400px',
    width: '800px',
    data: {
      'id': id
    }
  }
  );
}

openDialogAddItem()
  {

   this.dialog1.open(AddImportComponent,{
    height: '420px',
    width: '700px',
  }
  );
}

openDialogRepComment(id:number,cmt:number)
  {
   this.dialog1.open(RepCommentComponent,{
    height: '400px',
    width: '800px',
    data: {
      'id': id,
      'cmt':cmt
    }
  }
  );
}

closeDialog()
{

 this.dialog1.closeAll();

}



}

