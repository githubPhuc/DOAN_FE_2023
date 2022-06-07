import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: LoginService) { }

  ngOnInit(): void {
    const payload={b:'ábc'};
   this.httpService.getApi();
  }
  testApi(){
    
    this.httpService.getApi();
  }
}
