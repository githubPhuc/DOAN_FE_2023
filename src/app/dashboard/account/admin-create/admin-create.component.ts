import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/auth/login';
import { LoginService } from 'src/app/auth/login.service';
import { RegisterModel } from 'src/app/auth/register-model';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),


  });

  regis=new RegisterModel("","","","","","");
  onSubmit(form:FormGroup)
  {
    console.log('data',form.value);

    this.regis.username=form.value.username;
    this.regis.password=form.value.password;
    this.regis.email=form.value.email;
    this.regis.phone=form.value.phone;
    this.regis.fullName=form.value.fullName;
    this.regis.shippingAddress=form.value.address;
    console.log(this.regis);
    this.loginservice.registerAdmin(this.regis).subscribe(data=>{
      if(data.status=='Success')
      {
        alert("Tạo tài khoản thành công");
      }
    })
  }

}
