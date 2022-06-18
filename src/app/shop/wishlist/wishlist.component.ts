import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { DialogService } from 'src/app/dashboard/dialog.service';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private shopService:ShopService,private dialog:DialogService,private router:Router) { }

  isempty!:boolean;
  wishlist:any;
  ngOnInit(): void {

    this.shopService.getWishList(localStorage.getItem('userid')!).subscribe(data=>{
      console.log('cart',data);
      if(data[0]!=null)
      {
        this.isempty=false;
      }else
      {
        this.isempty=true;
      }
      this.wishlist=data;
    });
  }
  cart=new Cart(0,1,'');
  addCart(data:number)
  {

    this.cart.sanpham=data;
    this.cart.userid=localStorage.getItem('userid')!;
    console.log('xxxxx',this.cart);
    this.shopService.addCart(this.cart).subscribe(data1=>{
      if(data1.status==200)
      {
        alert("Đã thêm sản phẩm vào giỏ hàng");
        window.location.reload();
      }
      
    });

  }

  removeWishList(id:number)
  {
    this.shopService.removeWishList(id).subscribe(data=>{
      
    });
    location.replace(location.href);
  }
  goToProductDetails(id:number) {
    this.router.navigate(['shop/product-detail', id]);
  }

}
