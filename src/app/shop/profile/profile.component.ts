import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private shopService:ShopService) { }


  profileForm = new FormGroup({
    fullName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
 

  });
  ngOnInit(): void {

    this.shopService.getAccount(localStorage.getItem('userid')!).subscribe(data=>{
      this.profileForm.patchValue(data);
      console.log('pro',data);
    })
   
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
    if(form.value.password==form.value.passwordConfirm)
    {
      data.Password=form.value.passwordConfirm;
    }
    this.shopService.editProfile(data).subscribe(res=>{
      alert(res.msg);

      location.reload();
    })
  }
}
