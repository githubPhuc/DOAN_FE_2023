import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrademarkService {

  token=localStorage.getItem('token');
  constructor(private httpClient:HttpClient) { }


  public upload(data:any,id:number)
  {
    return this.httpClient
      .post<any>('https://localhost:7043/api/trademark/upload?id1='+id.toString(),data,{reportProgress: true, observe: 'events'});
    
  }
  PostTrademark(name:string)
  {
    return this.httpClient.post<any>('https://localhost:7043/api/trademark/posttrademark?name='+name,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  EditTrademark(id:number,data:any)
  {
    return this.httpClient.put<any>('https://localhost:7043/api/trademark/edittrademark?id='+id.toString(),data,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  EditTrademarkImg(data:FormData,id:number)
  {
    return this.httpClient.post<any>('https://localhost:7043/api/trademark/upload1?id='+id.toString(),data,{reportProgress: true, observe: 'events'});
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

  search(txt:string)
  {
    return this.httpClient.get<any>('https://localhost:7043/api/trademark/search?txtSearch='+txt,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }

  getTrademark(id:number)
  {
    return this.httpClient.get<any>('https://localhost:7043/api/trademark/gettrademarkbyid?id='+id.toString(),{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
