import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDepotService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  strToken = 'Bearer ' + this.token;
  public GetList(nameDepot: string, nameProduct: string,start: string,End: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/productDepots/GetList?nameDepot='+nameDepot+'&nameProduct='  + nameProduct+'&start='  + start+'&End='  + End, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public inventoryDepot() {
    return this.httpClient
      .get<any>('https://localhost:7109/api/productDepots/inventoryDepot', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public SetPriceSale(id: number,priceSale:number) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/productDepots/SetPriceSale?id='+id+'&priceSale='+priceSale,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
  public SetStatus(id: number,idProduct:number) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/productDepots/SetStatus?id='+id+'&idProduct='+idProduct,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
}
