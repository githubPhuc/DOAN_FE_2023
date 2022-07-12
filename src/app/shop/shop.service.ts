import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient:HttpClient) { }

  token=localStorage.getItem('token');
  public addCart(data:Cart)
  {
    const str=data.sanpham.toString()+'&userID='+data.userid+'&soLuong='+data.soluong.toString();
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/addcart?sanPham='+str,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public loadProduct()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/show',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public loadNewProduct()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/shownews',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public FilPriceCate(id:string, cate:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/filterpricecate?id='+id+'&cate='+cate.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public FilPriceBrand(id:string,cate:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/filterpricebrand?id='+id+'&cate='+cate.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public loadBrand()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/trademark/getalltrademark',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public loadHotProduct()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/showtop',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public loadTopSell()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/topsell',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public searchProduct(txt:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/search?txtSearch='+txt,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public getProductByCategory(id:number)
  {
  
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/getproductbycategory?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public getProductByBrand(id:number)
  {
  
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/getproductbybrand?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public getProductSale()
  {
  
    return this.httpClient
			.get<any>('https://localhost:7043/api/product/getsale',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public getCart(id:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/cart/getcart?userid='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public getAccount(id:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/authenticate/getaccountbyid?id='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public getAllCategory()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/category/getcategory',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public addWishList(data:any)
  {
   
    return this.httpClient
			.post<any>('https://localhost:7043/api/wishlist/postwishlist',data,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public getWishList(id:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/wishlist/getwishlist?userid='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public removeWishList(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/wishlist/removewishlist?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public removeCart(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/removecart?cartid='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public updateCart(id:number,sl:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/updatecart?cartid='+id.toString()+'&sl='+sl.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
  public removeAllCart(id:string)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/removeallcart?userid='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public order(id:string,address:string,phone:string,note:string)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/invoice/create?id='+id+'&address='+address+'&phone='+phone+'&note='+note,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public removeComment(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/cart/removecomment?commentid='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public editProfile(data:any)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/authenticate/editacount',data,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }

  public Cancel(id:number)
  {
    return this.httpClient
			.post<any>('https://localhost:7043/api/invoice/cancel?id='+id.toString(),{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }


  public payment(total:number)
  {
    return this.httpClient.post<any>('https://localhost:7043/api/pay/pay?total='+total,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }

  public getAllTrademark()
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/trademark/getalltrademark',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});
		
  }
}
