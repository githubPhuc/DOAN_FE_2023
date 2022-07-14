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

  msgName:any;
  msgPass:any;
  msgUser:any;
  msgPhone:any;
  msgMail:any;
  regis=new RegisterModel("","","","","","");
  onSubmit(form:FormGroup)
  {
    if(form.value.email.length<1)
    {
      this.msgMail='Email không được bỏ trống'
    }else
    {
      this.msgMail=null;
    }
    if(form.value.username.length<6||form.value.username.length>30)
    {
      this.msgUser='Tài khoản phải từ 6 đến 30 ký tự';
     
    }else
    {
      this.msgUser=null;
    }
    if(form.value.password.length<6||form.value.password.length>30)
    {
      this.msgPass='Mật khẩu phải từ 6 đến 30 ký tự';
  
    }else
    {
      this.msgPass=null;
    }
    if(form.value.phone.length>10||form.value.phone.length<10)
    {
      this.msgPhone='Số điện thoại phải đủ 10 ký tự';
    }else
    {
      this.msgPhone=null;
    }
    if(form.value.fullName.length<1)
    {
      this.msgName='Tên không được bỏ trống';
    }else
    {
      this.msgName=null;
    }

    if(this.msgPass!=null||this.msgPhone!=null||this.msgUser!=null||this.msgMail!=null)
    {
      return;
    }
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
        this.router.navigate(['/admin/account']);
      }
    })
  }

}
