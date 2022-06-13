import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private shopservice:ShopService,private router:Router) { }

  product:any;
  ngOnInit(): void {
    this.shopservice.loadProduct().subscribe(data=>
      {
        console.log(data);
        this.product=data;
      });
  }
  cart=new Cart(0,1,'');
  addCart(data:number)
  {
    this.cart.sanpham=data;
    this.cart.userid=localStorage.getItem('userid')!;
    console.log(this.cart);
    this.shopservice.addCart(this.cart).subscribe(data1=>{
      if(data1.status=200)
      {
        alert(data1.msg);
      }

    });
  }

  addToWishList(id:number)
  {
    this.shopservice.addWishList({productid:id,appuserid:localStorage.getItem('userid')}).subscribe(data=>{
    
    });
  }

  goToProductDetails(id:number) {
    this.router.navigate(['shop/product-detail', id]);
  }
  }
 

