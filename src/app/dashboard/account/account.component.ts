import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  userid:string=localStorage.getItem('userid')!;
  constructor(private accountService:AccountService) { }

  account:any;
  searchForm=new FormGroup({
    txtSearch: new FormControl('')
  });
  avt!:boolean;
  ngOnInit(): void {
    this.accountService.getAllAccount().subscribe(data=>{
      console.log(data);
   
      this.account=data.acc;
    });
  }

  lockAccount(id:string)
  {
  
    this.accountService.lockAccount(id).subscribe(data=>{
      if(data.status==200)
      {
        alert(data.msg);
        this.accountService.getAllAccount().subscribe(data=>{
          console.log(data);
       
          this.account=data.acc;
        });
      }
    });
    
  }
  onSubmit(form:FormGroup)
  {
    this.accountService.searchAccount(form.value.txtSearch).subscribe(res=>{
      this.account=res.acc;
    })
  }

  filter(id:string)
  {
    if(id=='0')
    {
      this.accountService.getAllAccount().subscribe(data=>{
        console.log(data);
     
        this.account=data.acc;
      });
      return;
    }
    this.accountService.filAccount(id).subscribe(res=>{
      this.account=res.acc;
    })
  }
}
