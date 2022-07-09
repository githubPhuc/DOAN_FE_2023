import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DialogService } from 'src/app/dashboard/dialog.service';

import { ShopService } from '../shop.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private shopService:ShopService,private router:Router,private jwtHelper: JwtHelperService,private dialog:DialogService) { }
  txt!:string;
  cart:any;
  isempty!:boolean;
  total:any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tkp:any;
  productForm=new FormGroup({
    txtSearch: new FormControl(''),
  });
  ngOnInit(): void {
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
    //alert(window.location.href.split('?')[1]);
    if(window.location.href.split('?')[1]!=null)
    {
      
      this.shopService.order(localStorage.getItem('userid')!,localStorage.getItem('address')!,localStorage.getItem('phone')!,localStorage.getItem('note')!).subscribe(res=>{
        if(res.status==200)
        {
          localStorage.removeItem('note');
          alert(res.msg);
          location.reload();
        }
      })
    }
    this.shopService.getCart(localStorage.getItem('userid')!).subscribe(data=>{
      console.log('cart',data);
      if(data.cart[0]!=null)
      {
        this.isempty=false;
      }else
      {
        this.isempty=true;
      }
    
    this.POSTS=data.cart;
    this.total=data.total;
    })
  }

  plus(id:number)
  {
    this.shopService.updateCart(id,1).subscribe(data=>{
      if(data.status==200)
      {
        this.shopService.getCart(localStorage.getItem('userid')!).subscribe(data=>{
          console.log('cart',data);
          if(data.cart[0]!=null)
          {
            this.isempty=false;
          }else
          {
            this.isempty=true;
          }
          this.POSTS=data.cart;
    this.total=data.total;
      });
    }
    if(data.status==500)
    {
      alert(data.msg);
    }
    });
  }
  remove(id:number)
  {
    this.shopService.updateCart(id,-1).subscribe(data=>{
      if(data.status==200)
      {
        this.shopService.getCart(localStorage.getItem('userid')!).subscribe(data=>{
          console.log('cart',data);
          if(data.cart[0]!=null)
          {
            this.isempty=false;
          }else
          {
            this.isempty=true;
          }
          this.POSTS=data.cart;
    this.total=data.total;
      });
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
    this.shopService.order(localStorage.getItem('userid')!,localStorage.getItem('address')!,localStorage.getItem('phone')!,'').subscribe(data=>{
      if(data.status==200)
      {
      alert('Đặt hàng thành công');
      this.shopService.getCart(localStorage.getItem('userid')!).subscribe(data=>{
        console.log('cart',data);
        if(data.cart[0]!=null)
        {
          this.isempty=false;
        }else
        {
          this.isempty=true;
        }
      
      this.POSTS=data.cart;
      this.total=data.total;
      })
      }
     
    });
    
    location.reload();
  }

  openPay()
  {
    localStorage.setItem('total',this.total);
    this.dialog.openChoosePayment();
  }
  removeCart(id:number)
  {
   if(window.confirm('Xoá sản phẩm này khỏi giỏ hàng ?'))
   {
    this.shopService.removeCart(id).subscribe(data=>{
      if(data.status==200)
      {
        this.shopService.getCart(localStorage.getItem('userid')!).subscribe(data=>{
          console.log('cart',data);
          if(data.cart[0]!=null)
          {
            this.isempty=false;
          }else
          {
            this.isempty=true;
          }
          this.POSTS=data.cart;
    this.total=data.total;
      });
      }
    });
   }
   
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
  
  getTokenI()
  {
  this.tkp= JSON.stringify(this.jwtHelper.decodeToken(localStorage.getItem('token')!));

  console.log('token',this.tkp['/']);

  }
 
}
