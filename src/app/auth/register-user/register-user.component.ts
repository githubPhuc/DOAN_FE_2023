import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { RegisterModel } from '../register-model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  sdt:boolean=false;
  checkPass:boolean=true;
  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  name:any;
  pass:any;
  phone:any;
  mail:any;
  address:any;
  registerForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    username: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),


  });
  msgName:any;
  msgPass:any;
  msgUser:any;
  msgPhone:any;
  msgMail:any;
  msgAddress:any;
  regis=new RegisterModel("","","","","","");
  onSubmit(form:FormGroup)
  {
    if(form.value.address.length<1)
    {
      this.msgAddress='Địa chỉ không được bỏ trống'
    }else
    {
      this.msgAddress=null;
    }
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
      if(form.value.password!=form.value.rePassword)
      {
        this.msgPass='Mật khẩu không trùng khớp'
      }else
      {
        this.msgPass=null;
      }
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

    if(this.msgPass!=null||this.msgPhone!=null||this.msgUser!=null||this.msgMail!=null||this.msgAddress!=null)
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
    this.loginservice.register(this.regis).subscribe(data=>{
      if(data.status=='Success')
      {
        alert("Đăng ký thành công");
       this.router.navigate(['/auth/login']);
      }else if(data.status==500)
      {
        alert(data.msg);
      }
    })
  }


  showPass()
  {
   let pass= document.getElementById('password');
   let icon=document.getElementById('icon-pass');

   if(pass?.getAttribute('type')=='password'&&icon?.getAttribute('class')=='fa fa-eye')
   {
    pass?.setAttribute('type','text');
    icon.setAttribute('class','fa fa-eye-slash');

   }else
   {
    pass?.setAttribute('type','password');
    icon?.setAttribute('class','fa fa-eye');
   }

  
   
  }
  showRePass()
  {
    let iconre=document.getElementById('icon-repass');
    let repass= document.getElementById('rePassword');
    if(repass?.getAttribute('type')=='password'&&iconre?.getAttribute('class')=='fa fa-eye')
    {
     repass?.setAttribute('type','text');
     iconre?.setAttribute('class','fa fa-eye-slash');
    }else
    {
     repass?.setAttribute('type','password');
     iconre?.setAttribute('class','fa fa-eye');
    }
  }
}
