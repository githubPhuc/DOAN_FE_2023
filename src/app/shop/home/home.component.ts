import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardLayoutComponent } from 'src/app/layouts/dashboard-layout/dashboard-layout.component';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(DashboardLayoutComponent) dash:any;
  constructor(private shopservice:ShopService,private router:Router,private ele: ElementRef) { }

  product:any;
  lstProduct:any;
  txt!:string;
  newProduct:any;
  hotProduct:any

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  productForm=new FormGroup({
    txtSearch: new FormControl(''),
  });

  ngOnInit(): void {

    this.shopservice.loadNewProduct().subscribe(data=>{
      this.newProduct=data;
    });
    this.shopservice.loadHotProduct().subscribe(data=>{
      this.hotProduct=data;
    })
   this.fetchPosts();
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
  onSubmit(form:FormGroup)
  {
    this.txt=form.value.txtSearch;
    this.router.navigate(['/shop/search',this.txt],);
  }
  addToWishList(id:number)
  {
    this.shopservice.addWishList({productid:id,appuserid:localStorage.getItem('userid')}).subscribe(data=>{
    
    });
    location.replace(location.href);
  }

  goToProductDetails(id:number) {
    this.router.navigate(['/product-detail', id]);
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
    this.shopservice.loadProduct().subscribe(
      data => {
        this.POSTS = data;
        console.log(data);

      }
      
    );
  }

}
 

