import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  err:any;
  isMail=1;
  XacThuc=-1;
  mail:any;
  otp='';
  constructor(private loginService:LoginService, private router:Router) { }

  mailForm=new FormGroup({
    email: new FormControl('')
  })

  otpForm=new FormGroup({
    otp: new FormControl('')
  })

  changeForm=new FormGroup({
    newPass: new FormControl('')
  })
  ngOnInit(): void {
  }
  
  onSubmit(form:FormGroup)
  {
    this.loginService.sendMail(form.value.email).subscribe(data=>{
      if(data.status==200)
      {
        alert('Mã xác minh đã gửi đến mail của bạn .')
        this.mail=form.value.email;
        this.isMail=0;
        this.otp=data.otp;
      }
      if(data.status==500)
      {
        this.err=data.msg;
      }
    })

  }

  onSubmitOtp(form:FormGroup)
  {
    if(this.otp==form.value.otp)
    {
      this.XacThuc=1;
      this.isMail=-1;
    }else{
      this.XacThuc=0;
    }
  
  }

  onSubmitChange(form:FormGroup)
  {
    this.loginService.changePassword(this.mail,form.value.newPass).subscribe(data=>{
      if(data.status==200)
      {
        alert(data.msg);
        this.router.navigate(['/auth/login']);
      }
    })
  }
}
