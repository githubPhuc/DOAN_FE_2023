import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    this.loginservice.register(this.regis).subscribe(data=>{
      if(data.status=='Success')
      {
        alert("Đăng ký thành công");
        this.loginservice.login(new Login(this.regis.username,this.regis.password)).subscribe(data1=>{
          console.log(data1.role);
          window.localStorage.setItem('token',data1.token);
          window.localStorage.setItem('userid',data1.id);
          window.localStorage.setItem('phone',data1.phone);
          window.localStorage.setItem('role',data1.role);
          if(data1.role=='Admin')
          {
          this.router.navigate(['/'+'admin']);
          }else
          {
          this.router.navigate(['/'+'shop']);
          }
        });;
      }
    })
  }
}
