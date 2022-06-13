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
}
