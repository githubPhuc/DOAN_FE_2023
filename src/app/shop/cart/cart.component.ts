import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private shopService:ShopService,private router:Router) { }
  txt!:string;
  cart:any;
  isempty!:boolean;
  productForm=new FormGroup({
    txtSearch: new FormControl(''),
  });
  ngOnInit(): void {

    this.shopService.getCart(localStorage.getItem('userid')!).subscribe(data=>{
      console.log('cart',data);
      if(data[0]!=null)
      {
        this.isempty=false;
      }else
      {
        this.isempty=true;
      }
 
    this.cart=data;
    })
  }

  order()
  {
    this.shopService.order(localStorage.getItem('userid')!,localStorage.getItem('address')!,localStorage.getItem('phone')!).subscribe(data=>{
      if(data.status==200)
      {
      alert('Đặt hàng thành công');
      }
      alert(data.status)
    });
    
    location.reload();
  }

  removeCart(id:number)
  {
    this.shopService.removeCart(id).subscribe(data=>{
      
    });
    location.reload();
  }

  removeAllCart()
  {
    this.shopService.removeAllCart(localStorage.getItem('userid')!).subscribe(data=>{
      location.reload();
    });
  }
  goToProductDetails(id:number) {
    this.router.navigate(['shop/product-detail', id]);
  }

  onSubmit(form:FormGroup)
  {
    this.txt=form.value.txtSearch;
    this.router.navigate(['/shop/search',this.txt],);
  }
}
