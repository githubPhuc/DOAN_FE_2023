import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/shop/shop.service';
import { CategoryService } from '../category.service';
import { TrademarkService } from '../trademark/trademark.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  category:any;
  brand:any;
  product:any;
  searchForm=new FormGroup({
    txt: new FormControl('')
  })

  constructor(private responseProduct:ProductService,private router:Router,private shopService:ShopService,private cateSer:CategoryService,private brandSer:TrademarkService) { }

  
  ngOnInit(): void {
    this.cateSer.getAllCategory().subscribe(res=>{
      this.category=res;
    });
    this.brandSer.getAllTrademark().subscribe(res=>{
      this.brand=res;
    })
    this.responseProduct.getAllProduct().subscribe(
      data => {
        this.product = data.pro;
        this.POSTS=this.product;
        console.log(data);

   
      }
      
    );

    

  }

  goToProductDetails(id:number) {
    this.router.navigate(['admin/product/pro-detail', id]);
  }



  goToProductEdit(id:number) {
    this.router.navigate(['admin/product/pro-edit', id]);
  }

  removeProduct(id:number)
  {
    if(window.confirm("Bạn có muốn xoá sản phẩm này ?"))
    {
      this.responseProduct.removeProduct(id).subscribe(data=>{
        if(data.status==200)
        {
          alert("Xoá thành công");
          
        }
        
      });
      location.reload();
    }
   
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
    this.responseProduct.getAllProduct().subscribe(
      data => {
        this.product = data.pro;
        this.POSTS=this.product;
        console.log(data);

   
      }
      
    );
  }

  filCate(id:string)
  {
    if(id=='0')
    {
      this.responseProduct.getAllProduct().subscribe(
        data => {
          this.product = data.pro;
          this.POSTS=this.product;
          console.log(data);
          this.fetchPosts();
     
        }
        
      );
      return;
    }
    let id1=Number.parseInt(id);
    this.shopService.getProductByCategory(id1).subscribe(res=>{
      this.product=res.pro;

    })
  }
  filBrand(id:string)
  {
    if(id=='0')
    {
      this.responseProduct.getAllProduct().subscribe(
        data => {
          this.product = data.pro;
          //this.POSTS=this.product;
          console.log(data);
  
     
        }
        
      );
      return;
    }
    let id1=Number.parseInt(id);
    this.shopService.getProductByBrand(id1).subscribe(res=>{
      this.product=res.pro;

    })
  }
  onSubmit(form:FormGroup)
  {
      if(form.value.txt=='')
      {
        return;
      }
      this.responseProduct.searchProduct(form.value.txt).subscribe(data=>{
        this.product=data.pro;
        console.log(this.POSTS);
      })
  }
}
