import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent implements OnInit {

  product:any;
  lstProduct:any;
  private sub:any;
  txt:any;

  constructor(private shopservice:ShopService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.route.params.subscribe(params=>{
      this.txt=params['txt'];
    })


  this.shopservice.getProductByCategory(this.txt).subscribe(data=>{
    this.product=data;
  })
}


  addToWishList(id:number)
  {
    this.shopservice.addWishList({productid:id,appuserid:localStorage.getItem('userid')}).subscribe(data=>{
    
    });
  }

  goToProductDetails(id:number) {
    this.router.navigate(['shop/product-detail', id]).then(()=>{
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
 });
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

}
