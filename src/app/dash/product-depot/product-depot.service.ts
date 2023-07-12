import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDepotService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  strToken = 'Bearer ' + this.token;
  public GetList(nameDepot: string, nameProduct: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/productDepots/GetList?nameDepot='+nameDepot+'&nameProduct='  + nameProduct, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public SetPriceOnProduct(id: number) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/productDepots/SetPriceOnProduct?id='+id,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
}
