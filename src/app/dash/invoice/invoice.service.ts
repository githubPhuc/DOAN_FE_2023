import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  strToken = 'Bearer ' + this.token;
  public GetList(code: string, Status:string,start: string,End: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/BillOfSales/GetList?code=' + code + '&Status=' + Status+'&start='  + start+'&End='  + End , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public SalesReport(start: string,End: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/BillOfSales/SalesReport?start=' + start +'?End=' + End , {
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
  public acceptance(id: number,Username:string,Status:string) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/BillOfSales/acceptance?id='+id+'&Username='+Username+'&Status='+Status,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
}
