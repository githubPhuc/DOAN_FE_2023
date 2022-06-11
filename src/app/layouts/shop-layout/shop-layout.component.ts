import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.scss']
})
export class ShopLayoutComponent implements OnInit {

  constructor(private shopservice:ShopService) { }

  count:any;
  
  ngOnInit(): void {
    this.shopservice.getCart(localStorage.getItem('userid')!).subscribe(data=>{
     console.log(data);
     if(data[0]==null)
     {
      this.count=0;
     
     }else
     {
      this.count=data[0].soLuongCart;
      
     
     }

    });
  }


  count1()
  {

  }

}
