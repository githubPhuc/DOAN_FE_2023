import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DialogService } from 'src/app/dashboard/dialog.service';
import { InvoiceService } from 'src/app/dashboard/invoice/invoice.service';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  check:number=0;
  constructor(private shopService:ShopService,
              private invoiceService:InvoiceService,
              private dialog:DialogService,
              private router:Router) { }

  isLogin!:boolean;
  invoice:any;
  profileForm = new FormGroup({
    fullName: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    passwordConfirm: new FormControl(''),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    newPassword: new FormControl(''),
 

  });
  get proFormControl()
  {
    return this.profileForm.controls
  }

  ngOnInit(): void {
    if(localStorage.getItem('token')=='')
    {
      this.isLogin=false;
    }else
    {
      this.isLogin=true;
    }
    this.shopService.getAccount(localStorage.getItem('userid')!).subscribe(data=>{
      this.profileForm.patchValue(data);
      console.log('pro',data);
    })

    this.invoiceService.getAllInvoiceUser(localStorage.getItem('userid')!).subscribe(data=>{
      this.invoice=data;
    })
   
  }
  view(id:number)
  {
    this.dialog.opentDialog(id);
  }

  logOut()
  {
    window.localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
  

  onSubmit(form:FormGroup)
  {
    
    const  data={
      Id:localStorage.getItem('userid'),
      Email:form.value.email,
      Phone:form.value.phone,
      Address:form.value.address,
      Password:form.value.password

    }
    if(form.value.newPassword==form.value.passwordConfirm&&form.value.newPassword!=null)
    {
      data.Password=form.value.passwordConfirm;
     
    }else
    {
      this.check=1;
      return;
    }
    
    
    this.shopService.editProfile(data).subscribe(res=>{
      alert(res.msg);

      location.reload();
    })

    console.log(data);
  }

  cancel(id:number)
  {
    this.shopService.Cancel(id).subscribe(res=>{
      if(res.status==200)
      {
        alert(res.msg);
        this.invoiceService.getAllInvoiceUser(localStorage.getItem('userid')!).subscribe(data=>{
          this.invoice=data;
        });
      }
    })
  }
}
