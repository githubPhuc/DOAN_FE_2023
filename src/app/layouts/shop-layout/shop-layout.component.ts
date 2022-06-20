import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/dashboard/category.service';
import { DialogService } from 'src/app/dashboard/dialog.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.scss']
})
export class ShopLayoutComponent implements OnInit {

  constructor(private shopservice:ShopService,private router:Router,private dialog:DialogService,private cateService:CategoryService) { }

  count=0;
  count2=0;
  username:any;
  islogin!:boolean;
  lstCategory:any;
  lstProduct:any;
  lstTrademark:any;
  productForm=new FormGroup({
    txtSearch: new FormControl(''),
  });
  ngOnInit(): void {

    if(localStorage.getItem('role')=='Admin')
    {
      this.router.navigate(['/admin']);
    }
    localStorage.getItem('token')!=null?this.islogin=true:this.islogin=false;
    this.username=window.localStorage.getItem('username');
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

    this.shopservice.getWishList(localStorage.getItem('userid')!).subscribe(data=>{
      console.log('xxxxxxxxxxxxxxxx',data);
      if(data[0]==null)
      {
       this.count2=0;
      
      }else
      {
       this.count2=data[0].soluong;
       
      
      }
      
     });

     this.cateService.getAllCategory().subscribe(data=>{
      this.lstCategory=data;
     });

     this.shopservice.getAllTrademark().subscribe(data=>{
      this.lstTrademark=data;
     })
   
   
    
  }
  search(txt:string)
     {
      
      
     }
  routing(index:string)
  {
    this.router.navigate(['/'+'auth/login']);
  }
  logOut()
  {
    this.dialog.openDialogConfirm("Bạn có muốn đăng xuất");
  }


  onSubmit(form:FormGroup)
  {

    this.shopservice.searchProduct(form.value.txtSearch).subscribe(data=>{
      this.lstProduct=data;
    });
  }


}
