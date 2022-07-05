import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;

  public getAllComment()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/comment/getallcomment',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }

  public getAllCommentInProduct(id:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/comment/getallcommentinproduct?id='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }

  public addComment(data:any)
  {
   const str='?userid='+data.userId+'&content='+data.content+'&star='+data.star.toString()+'&productid='+data.productId +'&replyid='+data.replyId.toString();
    return this.httpClient
			.post<any>('https://localhost:7043/api/comment/addcomment'+str,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }

  public removeComment(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/comment/removecomment?commentid='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }

  public removeCommentUser(id:number,userid:string)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/comment/removecommentuser?commentid='+id.toString()+'&userid='+userid,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o'
     })});
		
  }
}


