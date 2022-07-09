import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from 'src/app/dashboard/category.service';
import { CommentService } from 'src/app/dashboard/comment/comment.service';
import { DialogService } from 'src/app/dashboard/dialog.service';
import { ProductService } from 'src/app/dashboard/product/product.service';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.scss']
})
export class DetailProComponent implements OnInit {
  isScroll:boolean=false;
  id!: number;
  private sub: any;
 product:any;
 img:any;
  category:any;
  comment:any;
 
  userid=localStorage.getItem('userid');
  constructor(private proservice:ProductService,private route: ActivatedRoute,private dialog:DialogService,private commentService:CommentService,private shopService:ShopService,private cateService:CategoryService,private router:Router) { }
  
  ngOnInit(): void {

window.scrollTo(0,0);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.proservice.getProduct(this.id).subscribe(data=>{
        
        this.product=data.pro;
        this.img=data.img;
        this.shopService.getProductByCategory(this.product.categoryId).subscribe(data=>{
          this.category=data.pro;
          console.log('cate',data)
        });
       
        
        
      });

   });
  
   this.commentService.getAllCommentInProduct(this.id).subscribe(data=>{
    this.comment=data;
    console.log('cmt',data);
   });

   this.shopService.getProductByCategory(this.product.categoryId).subscribe(data=>{
    this.category=data;
    console.log('cate',data)
  });



   
  }

 
  viewComment()
  {
    document.getElementById('comment')?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }
  openAddComment(id:number)
  {
    this.dialog.openDialogAddComment(id);
  }

  openRepComment(cmt:number)
  {
   
    this.dialog.openDialogRepComment(this.id,cmt);
  }

  removeComment(id:number)
  {
    if(window.confirm('Bạn có muốn xoá bình luận này ?'))
    {
      this.commentService.removeCommentUser(id,localStorage.getItem('userid')!).subscribe(res=>{
        if(res.status==200)
        {
          alert(res.msg);
          location.reload();
        }
      })
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
    this.shopService.addCart(this.cart).subscribe(data1=>{
      if(data1.status==200)
      {
        alert(data1.msg);
      }

    });
  }

  goToProductDetails(id:number){
    this.router.navigate(['/product-detail',id]).then(()=>{
      document.documentElement.scrollIntoView({
        behavior: "auto",
        block: "start",
        inline: "nearest"
        });
    });
  }

  addToWishList(id:number)
  {
    if(localStorage.getItem('role')=='Admin')
    {
      return;
    }
    this.shopService.addWishList(id).subscribe(data=>{

    })
  }
  viewAnother(id:number)
  {
    this.router.navigate(['/product/category',id])
  }


  
}
