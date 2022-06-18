import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private responseProduct:ProductService,private router:Router) { }

  product:any;
  ngOnInit(): void {
    this.fetchPosts();
  }

  goToProductDetails(id:number) {
    this.router.navigate(['admin/product/pro-detail', id]);
  }



  goToProductEdit(id:number) {
    this.router.navigate(['admin/product/pro-edit', id]);
  }

  removeProduct(id:number)
  {
    this.responseProduct.removeProduct(id).subscribe(data=>{
      if(data.status==200)
      {
        alert("Xoá thành công");
        location.replace(location.href);
      }
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
    this.responseProduct.getAllProduct().subscribe(
      data => {
        this.POSTS = data;
        console.log(data);

   
      }
      
    );
  }
}
