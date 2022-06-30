import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';
import { DialogService } from '../dialog.service';
import { ProductService } from '../product/product.service';
import { TrademarkService } from '../trademark/trademark.service';

@Component({
  selector: 'app-sale-off',
  templateUrl: './sale-off.component.html',
  styleUrls: ['./sale-off.component.scss']
})
export class SaleOffComponent implements OnInit {
  checkPer:boolean=true;
  checkPri:boolean=false;

  checkCate:boolean=true;
  checkBrand:boolean=false;
  disPri:boolean=false;
  disPer:boolean=true;
  type:boolean=true;
 
  POSTS:any;

  category:any;
  brand:any;
  searchForm=new FormGroup({
    txt: new FormControl('')
  });
  saleForm=new FormGroup({
    idCate: new FormControl(''),
    idBrand: new FormControl(''),
    price: new FormControl(''),
    percent: new FormControl('')
  });


  sale={
    Cate: 0,
    Brand: 0,
    Price: 0,
    Percent:0
    
  }
  constructor(private productService:ProductService,private cateSevice:CategoryService,private brandService:TrademarkService,private dialog:DialogService) { }

  ngOnInit(): void {

    this.cateSevice.getAllCategory().subscribe(data=>{
      this.category=data;
    });
    this.brandService.getAllTrademark().subscribe(data=>{
      this.brand=data;
    })
    this.productService.getAllProduct().subscribe(data=>{
      this.POSTS=data.pro;
    })
  }

  tick()
  {
    this.checkCate=!this.checkCate;
    this.checkBrand=!this.checkBrand;
    if(this.checkCate==true)
    {
      this.type=true;
    }else
    {
      this.type=false;
    }
  }
  tick1()
  {
    this.checkPer=!this.checkPer;
    this.checkPri=!this.checkPri;
  
  }

  onSearch(form: FormGroup)
  {
    this.productService.searchProduct(form.value.txt).subscribe(data=>{
      this.POSTS=data;
    })
  }

  onSubmit(form: FormGroup)
  {
    if(form.value.idCate==''&&form.value.idBrand==''&&form.value.percent==''&&form.value.price=='')
    {
      return;
    }
    this.sale.Cate=form.value.idCate;
    if(form.value.idCate=='')
    {
      this.sale.Cate=0;
    }
    this.sale.Brand=form.value.idBrand;
    if(form.value.idBrand=='')
    {
      this.sale.Brand=0;
    }
    
    this.sale.Price=form.value.price;
    if(form.value.price=='')
    {
      this.sale.Price=0;
    }
    this.sale.Percent=form.value.percent;
    if(form.value.percent=='')
    {
      this.sale.Percent=0;
    }
    console.log(form.value);
    console.log(this.sale);
    this.productService.Promotion(this.sale).subscribe(data=>{
      if(data.status==200)
      {
        this.productService.getAllProduct().subscribe(data=>{
          this.POSTS=data.pro;
        });
      }
    });
  }

  goToProductDetails(id:number)
  {

  }

  openSale(id:number)
  {
    this.dialog.openSale(id);
  }
  refresh()
  {
    this.productService.getAllProduct().subscribe(data=>{
      this.POSTS=data.pro;
    })
  }
}
