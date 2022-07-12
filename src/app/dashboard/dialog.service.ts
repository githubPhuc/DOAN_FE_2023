import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef, _closeDialogVia} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AddCommentComponent } from './dialog/add-comment/add-comment.component';
import { AddImportComponent } from './dialog/add-import/add-import.component';
import { ChoosePaymentComponent } from './dialog/choose-payment/choose-payment.component';
import { ConfirmDeleteComponent } from './dialog/confirm-delete/confirm-delete.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { EditBrandComponent } from './dialog/edit-brand/edit-brand.component';
import { EditCategoryComponent } from './dialog/edit-category/edit-category.component';
import { EditSlideshowComponent } from './dialog/edit-slideshow/edit-slideshow.component';
import { EditSuppComponent } from './dialog/edit-supp/edit-supp.component';
import { ImportDetailComponent } from './dialog/import-detail/import-detail.component';
import { InvoiceDetailDialogComponent } from './dialog/invoice-detail-dialog/invoice-detail-dialog.component';
import { InvoiceDetailUserComponent } from './dialog/invoice-detail-user/invoice-detail-user.component';
import { RepCommentComponent } from './dialog/rep-comment/rep-comment.component';
import { SaleComponent } from './dialog/sale/sale.component';
import { ShowSuccessComponent } from './dialog/show-success/show-success.component';
import { SlideShowCreateComponent } from './dialog/slide-show-create/slide-show-create.component';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog1:MatDialog,private router:Router) { }


  opentDialog(id:number)
  {

   this.dialog1.open(InvoiceDetailDialogComponent,{
    height: '600px',
    width: '1000px',
    data: {
      'id': id
    }
  }
  );
  
}

opentDialog1(id:number)
{

 this.dialog1.open(InvoiceDetailUserComponent,{
  height: '500px',
  width: '800px',
  data: {
    'id': id
  }
}
);

}
openSale(id:number)
{

 this.dialog1.open(SaleComponent,{
  height: '230px',
  width: '460px',
  data: {
    'id': id
  }
}
);
}
opentImportDetail(id:number)
{

 this.dialog1.open(ImportDetailComponent,{
  height: '600px',
  width: '1000px',
  data: {
    'id': id
  }
}
);
}

openChoosePayment()
{

 this.dialog1.open(ChoosePaymentComponent,{
  height: '600px',
  width: '1200px',
 
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
openDialogEditBrand(id:number)
  {

   this.dialog1.open(EditBrandComponent,{
    height: '300px',
    width: '400px',
    data: {
      'id': id
    }
  }
  );
}
openDialogEditSup(id:number)
  {

   this.dialog1.open(EditSuppComponent,{
    height: '450px',
    width: '600px',
    data: {
      'id': id
    }
  }
  );
}
openDialogCreateSlide()
  {

   this.dialog1.open(SlideShowCreateComponent,{
    height: '350px',
    width: '670px',

  }
  );
}

openDialogEditSlide(id:number)
  {

   this.dialog1.open(EditSlideshowComponent,{
    height: '350px',
    width: '670px',
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
    height: '450px',
    width: '700px',
  }
  );
}

openDialogRepComment(id:number,cmt:number)
  {
   this.dialog1.open(RepCommentComponent,{
    height: '500px',
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

