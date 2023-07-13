import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  product:any;
  lstProduct:any;
  private sub:any;
  txt:any;
  productForm=new FormGroup({
    txtSearch: new FormControl(''),
  });
  constructor(private shopservice:ShopService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.txt=params['txt'];
    })

    this.shopservice.searchProduct(this.txt).subscribe(data=>{
      this.product=data;
    })
}

  onSubmit(form:FormGroup)
  {
    this.txt=form.value.txtSearch;
    this.router.navigate(['/shop/search',this.txt],);
    this.shopservice.searchProduct(this.txt).subscribe(data=>{
      this.product=data;
    })
  }
  addToWishList(id:number)
  {
    this.shopservice.addWishList({productid:id,appuserid:localStorage.getItem('userid')}).subscribe(data=>{
    
    });
  }

  goToProductDetails(id:number) {
    this.router.navigate(['/product-detail', id]);
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
