import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public postAbount(data:any)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/about/postabout',data,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }

  public deleteAbount(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/about/deleteabout?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }

  public getAllAbount()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/about/getAllAbout',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }
}
