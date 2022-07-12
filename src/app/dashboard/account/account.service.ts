import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public getAllAccount()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/authenticate/getaccount',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }
  public filAccount(id:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/authenticate/filaccount?id='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }

   public searchAccount(txt:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/authenticate/searchaccount?txt='+txt,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }

  public lockAccount(id:string)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/authenticate/lockaccount?id='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }
}
