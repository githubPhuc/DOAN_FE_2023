import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideShowService {

  constructor(private httpClient:HttpClient) { }

  public getAllSlide()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/slideshow/getslideshow',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',

     })});
		
  }

  public deleteSlide(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/slideshow/delete?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',

     })});
		
  }
}
