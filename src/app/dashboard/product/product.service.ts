import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  public getSaleProduct()
  {
    return this.httpClient
      .get<any>('https://localhost:7043/api/product/getsale',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
    
  }

    //

    public getAllProduct()
    {
      return this.httpClient
        .get<any>('https://localhost:7043/api/product/show',{headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
       })});
      
    }

    public searchProduct(txt:string)
    {
      return this.httpClient
        .get<any>('https://localhost:7043/api/product/search?txtSearch='+txt,{headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
       })});
      
    }

    public getProduct(id:number)
    {
      return this.httpClient
        .get<any>('https://localhost:7043/api/product/detail?id='+id.toString(),{headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
       })});
      
    }
  

    public postProduct(data:ProductModel)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/postproduct1',data,{headers: new HttpHeaders({ 
          'Content-Type': 'application/json'
         
       })});
      
    }
    public Promotion(data:any)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/promotion',data,{headers: new HttpHeaders({ 
          'Content-Type': 'application/json'
         
       })});
      
    }
    public resetPromotion(data:any)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/resetpromotion?proid='+data.proId.toString()+'&cateid='+data.cateId.toString()+'&brandId='+data.brandId.toString(),{headers: new HttpHeaders({ 
          'Content-Type': 'application/json'
         
       })});
      
    }

    public upload(data:FormData,id:number)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/testimg?id1='+id.toString(),data,{reportProgress: true, observe: 'events'});
      
    }
    public uploadShow(data:FormData,id:number)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/uploadshow?id1='+id.toString(),data,{reportProgress: true, observe: 'events'});
      
    }

    public uploadEdit(data:FormData,id:number)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/upload?id='+id.toString(),data,{reportProgress: true, observe: 'events'});
      
    }
    public uploadEditList(data:FormData,id:number)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/uploadedit?id1='+id.toString(),data,{reportProgress: true, observe: 'events'});
      
    }

    public editProduct(data:ProductModel,id:number)
    {
     
      console.log('áaaaaaaaaa',data);
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/update'+'?id='+id.toString(),data,{headers: new HttpHeaders({ 
          'Content-Type': 'application/json'
         
       })});
      
    }

    
    public removeProduct(id:number)
    {
     
   
      return this.httpClient
        .post<any>('https://localhost:7043/api/product/delete?id='+id.toString(),{headers: new HttpHeaders({ 
          'Content-Type': 'application/json'
         
       })});
      
    }
   
}
