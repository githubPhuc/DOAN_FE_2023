import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  strToken = 'Bearer ' + this.token;
  public GetList(code: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/BillOfSales/GetList?code=' + code , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public SalesReport(code: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/BillOfSales/SalesReport?code=' + code , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public GetListDetail(id: number) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/BillOfSales/GetListDetail?id=' + id , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public GetListOnID(id: number) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/ImportBillDepots/GetListOnID?id=' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public acceptance(id: number,Username:string) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/BillOfSales/acceptance?id='+id+'&Username='+Username,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
}
