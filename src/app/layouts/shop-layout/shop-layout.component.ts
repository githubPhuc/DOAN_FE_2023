import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/dashboard/dialog.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.scss']
})
export class ShopLayoutComponent implements OnInit {

  constructor(private shopservice:ShopService,private router:Router,private dialog:DialogService) { }

  count=0;
  count2=0;
  username:any;
  islogin!:boolean;
  ngOnInit(): void {
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

   

   
    
  }

  routing(index:string)
  {
    this.router.navigate(['/'+'auth/login']);
  }
  logOut()
  {
    this.dialog.openDialogConfirm("Bạn có muốn đăng xuất");
  }

}
