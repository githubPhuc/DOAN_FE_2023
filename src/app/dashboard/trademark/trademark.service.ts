import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrademarkService {

  token=localStorage.getItem('token');
  constructor(private httpClient:HttpClient) { }


  PostTrademark(name:string)
  {
    return this.httpClient.post<any>('https://localhost:7043/api/trademark/posttrademark?name='+name,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  DeleteTrademark(id:number)
  {
    return this.httpClient.post<any>('https://localhost:7043/api/trademark/removetrademark?id='+id.toString(),{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }

  getAllTrademark()
  {
    return this.httpClient.get<any>('https://localhost:7043/api/trademark/getalltrademark',{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
