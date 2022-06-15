import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient:HttpClient) { }

  
  public addCart(data:Cart)
  {
    const str=data.sanpham.toString()+'&userID='+data.userid+'&soLuong='+data.soluong.toString();
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/addcart?sanPham='+str,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }
  public loadProduct()
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

  public getCart(id:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/cart/getcart?userid='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public getAccount(id:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/authenticate/getaccountbyid?id='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public addWishList(data:any)
  {
   
    return this.httpClient
			.post<any>('https://localhost:7043/api/wishlist/postwishlist',data,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }
  public getWishList(id:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/wishlist/getwishlist?userid='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public removeWishList(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/wishlist/removewishlist?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public removeCart(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/removecart?cartid='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }
  public removeAllCart(id:string)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/removeallcart?userid='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public order(id:string,address:string,phone:string)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/invoice/create?id='+id+'&address='+address+'&phone='+phone,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public removeComment(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/removecomment?commentid='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public editProfile(data:any)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/authenticate/editaccount',data,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }
}
