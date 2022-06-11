import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private shopService:ShopService) { }

  cart:any;
  ngOnInit(): void {

    this.shopService.getCart(localStorage.getItem('userid')!).subscribe(data=>{
      console.log('cart',data);
    this.cart=data;
    })
  }

  
}
