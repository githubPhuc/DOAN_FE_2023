import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from '../../dialog.service';
import { SupplierService } from '../../supplier/supplier.service';

@Component({
  selector: 'app-edit-supp',
  templateUrl: './edit-supp.component.html',
  styleUrls: ['./edit-supp.component.scss']
})
export class EditSuppComponent implements OnInit {
sup:any;
  constructor(private supService:SupplierService,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) private data1:any,
    private dialog:DialogService) { }
supplierForm = new FormGroup({
name: new FormControl(''),
email: new FormControl(''),
phone: new FormControl(''),
address: new FormControl(''),




});
data:any;
ngOnInit(): void {
  this.supService.getSupplier(this.data1.id).subscribe(res=>{
    this.supplierForm.patchValue(res);
    this.sup=res.phone.replace(/\s/g, "");

    
  })
}

onSubmit(form:FormGroup)
{
this.data={
supplierName:form.value.name,
email:form.value.email,
phone:form.value.phone.toString(),
address:form.value.address
}

this.supService.editSupplier(this.data1.id,this.data).subscribe(data1=>{
  if(data1.status==500)
{
  alert(data1.msg);


}
if(data1.status==200)
{
  alert(data1.msg);
  this.dialog.closeDialog();
  location.reload();

}
})
}

}
