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

  checkPass:boolean=true;
  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    username: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),


  });

  regis=new RegisterModel("","","","","","");
  onSubmit(form:FormGroup)
  {
    if(form.value.password!=form.value.rePassword)
    {
      this.checkPass=false;
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
