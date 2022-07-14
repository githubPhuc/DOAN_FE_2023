import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../../dialog.service';
import { SupplierService } from '../../supplier/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

 
  constructor(private supService:SupplierService,
    private router:Router,
    private dialog:DialogService) { }
supplierForm = new FormGroup({
supplierName: new FormControl(''),
email: new FormControl(''),
phone: new FormControl(''),
address: new FormControl(''),




});
data:any;
ngOnInit(): void {
}

onSubmit(form:FormGroup)
{
this.data={
supplierName:form.value.supplierName,
email:form.value.email,
phone:form.value.phone.toString(),
address:form.value.address
}
if(this.data.supplierName==''||this.data.email==''||this.data.address==''||this.data.phone=='')
{
return;
}

this.supService.postSupplier(this.data).subscribe(data1=>{

if(data1.status==500)
{
alert(data1.msg)
}
if(data1.status==200)
{
alert(data1.msg);



this.router.navigate(['/admin/supplier']);
}
})
}

  cancle()
  {
    this.dialog.closeDialog();
  }
}
