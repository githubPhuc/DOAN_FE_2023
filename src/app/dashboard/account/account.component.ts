import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  account:any;

  avt!:boolean;
  ngOnInit(): void {
    this.accountService.getAllAccount().subscribe(data=>{
      console.log(data);
      if(data.avatar!=null)
      {
        this.avt=true;
      }
      this.account=data;
    });
  }

}
