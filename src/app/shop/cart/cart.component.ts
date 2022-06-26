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

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

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
 
    this.POSTS=data;
    })
  }

  plus(id:number)
  {
    this.shopService.updateCart(id,1).subscribe(data=>{
      if(data.status==200)
      {
        location.replace(location.href);
      }
    })
  }
  remove(id:number)
  {
    this.shopService.updateCart(id,-1).subscribe(data=>{
      if(data.status==200)
      {
        location.replace(location.href);
      }
    })
  }
  update(txt:any)
  {
    var a= document.getElementById('sl');
   
      alert(txt);
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
      if(data.status==200)
      {
        alert(data.msg);
        location.reload();
      }
      
    });
  }
  goToProductDetails(id:number) {
    this.router.navigate(['/product-detail', id]);
  }

  onSubmit(form:FormGroup)
  {
    this.txt=form.value.txtSearch;
    this.router.navigate(['/shop/search',this.txt],);
  }

  pay()
  {
    this.shopService.payment().subscribe(data=>{

    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.shopService.getCart(localStorage.getItem('userid')!).subscribe(
      data => {
        this.POSTS = data;
        console.log(data);

        if(data[0]!=null)
        {
          this.isempty=false;
        }else
        {
          this.isempty=true;
        }
      }
      
    );


  }
}
