import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { CategoryModel } from '../category-model';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
 

  constructor(private httpClient: HttpClient) { }

  httpOp:any;
  token=localStorage.getItem('token');

  public getAllCategory()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/category/getcategory',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public getCategory(id:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/category/getcategorybyid?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public searchCategory(txt:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/category/searchcategory?txtSearch='+txt,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public putCategory(id:number,name:string,status:boolean)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/category/update?id='+id.toString()+'&name='+name+'&status='+status,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }


  public postCategory(cate:CategoryModel){
 
    console.log(cate);
    return this.httpClient.post<any>('https://localhost:7043/api/Category/postcategory', cate,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }


  deleteCategory(id:number){
 
    console.log(id);
    return this.httpClient.post<any>('https://localhost:7043/api/category/delete?id='+id.toString(), id,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }

  test()
  {
    return this.httpClient.post<any>('https://localhost:7043/api/invoice/testpayment',{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }

}
