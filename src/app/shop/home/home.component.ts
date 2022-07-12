import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SlideShowService } from 'src/app/dashboard/slide-show/slide-show.service';
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
  constructor(private shopservice:ShopService,private router:Router,private ele: ElementRef,private slideService:SlideShowService) { }
  brand:any;
  product:any;
  lstProduct:any;
  txt!:string;
  topSell:any;
  newProduct:any;
  hotProduct:any
  slideshow:any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  scr:boolean=false;
  scr1:boolean=false;
  lstBr:any=[];
  htvp:any;
  gaming:any;
  dhkt:any;
  mac:any;
  category:any;
  productForm=new FormGroup({
    txtSearch: new FormControl(''),
  });
  
  ngOnInit(): void {
    window.onscroll=()=>this.onSCR();
 
    this.shopservice.loadNewProduct().subscribe(data=>{
      this.newProduct=data;
    });
    this.shopservice.loadHotProduct().subscribe(data=>{
      this.hotProduct=data;
    });
    this.shopservice.loadTopSell().subscribe(data=>{
      this.topSell=data;
    });
    this.shopservice.loadBrand().subscribe(data=>{
      this.brand=data;
    });
    this.shopservice.getAllCategory().subscribe(data=>{
      this.category=data;
      for(let d of data)
      {
        this.shopservice.getProductByCategory(d.id).subscribe(data1=>{
          
          this.lstBr.push(data1.pro);  
        });
      }

    });
   
   
   this.fetchPosts();

   this.slideService.getAllSlideActive().subscribe(data=>{
    this.slideshow=data;
   });  
 

   
  }

  scrollTop()
  {
      //document.documentElement.scrollTop=0;
      document.documentElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
    
  }
  onSCR()
  {
    if(document.documentElement.scrollTop>100)
    {
      
      this.scr=true;
    }else
    {
      this.scr=false;
    }
    if(document.documentElement.scrollTop>600)
    {
      
      this.scr1=true;
    }else
    {
      this.scr1=false;
    }
  }
  cart=new Cart(0,1,'');
  addCart(data:number)
  {
    if(localStorage.getItem('role')=='Admin')
    {
      return;
    }
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
    if(localStorage.getItem('role')=='Admin')
    {
      return;
    }
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
  toph!:number;
  scrollToCate(id:string)
  {
    
    let a=document.getElementById(id);
    a?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });

  
  }

}
 

