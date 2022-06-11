import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private shopservice:ShopService) { }

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

    });
  }
  }
 

