import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  check:number=0;
  editForm=new FormGroup({
    fullName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    newPassword: new FormControl(''),
    rePassword: new FormControl('')
  });
  constructor(private shopService:ShopService) { }


  ngOnInit(): void {
    this.shopService.getAccount(localStorage.getItem('userid')!).subscribe(res=>{
      this.editForm.patchValue(res);
    })
  }

  onSubmit(form:FormGroup)
  {
    let dtaEdit={
        Id:localStorage.getItem('userid'),
        Email:form.value.email,
        Address:form.value.address,
        Password:form.value.password,
        Phone:''
    }

    if(form.value.newPassword==form.value.rePassword&&form.value.newPassword!=null)
    {
      dtaEdit.Password=form.value.rePassword;
     
    }else
    {
      this.check=1;
      return;
    }
    
    
    this.shopService.editProfile(dtaEdit).subscribe(res=>{
      alert(res.msg);

      location.reload();
    })

    console.log(dtaEdit);
  }
  }


