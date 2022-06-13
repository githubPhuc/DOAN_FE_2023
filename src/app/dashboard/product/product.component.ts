import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private responseProduct:ProductService,private router:Router) { }

  product:any;
  ngOnInit(): void {
    this.responseProduct.getAllProduct().subscribe(data=>{
      this.product=data
      console.log(data);
    })
  }

  goToProductDetails(id:number) {
    this.router.navigate(['admin/product/pro-detail', id]);
  }



  goToProductEdit(id:number) {
    alert("ok");
    this.router.navigate(['admin/product/pro-edit', id]);
  }
}
