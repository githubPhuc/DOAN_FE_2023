import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Login } from './login';
import { RegisterModel } from './register-model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient) {

   }
  
   public login(data:Login)
   {
    return this.httpClient
    .post<any>('https://localhost:7043/api/authenticate/login',data,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
     
   })});

   }

   public register(data:RegisterModel)
   {
    return this.httpClient
    .post<any>('https://localhost:7043/api/authenticate/register',data,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
     
   })});
   }
}
