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
  all:boolean=true;
  checkCate:boolean=false;
  checkBrand:boolean=false;
  checkAll:boolean=true;
  disPri:boolean=false;
  disPer:boolean=true;
  type:boolean=true;
  choose:number=0;
  POSTS:any;
  backup:any;
  category:any;
  brand:any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
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

  reset={
    proId: 0,
    cateId: 0,
    brandId: 0
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
      this.backup=data.pro;
    })
  }


  tick2()
  {
    this.checkAll=true;
    this.checkBrand=false;
    this.checkCate=false;
    this.all=true;
    
  }
  tickB()
  {
    this.checkCate=false;
    this.checkBrand=true;
    this.checkAll=false;
    this.all=false;
    
      this.type=false;
    
  }
  tickC()
  {
    this.checkCate=true;
    this.checkBrand=false;
    this.checkAll=false;
    this.all=false;
   
      this.type=true;
  
  }
  tick1()
  {
    this.checkPer=!this.checkPer;
    this.checkPri=!this.checkPri;
  
  }

  onSearch(form: FormGroup)
  {
    this.productService.searchProduct(form.value.txt).subscribe(data=>{
      this.POSTS=data.pro;
      this.backup=data.pro;
    });
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
    this.productService.getAllProduct().subscribe(data=>{
      this.POSTS=data.pro;
      this.backup=data.pro;
    })
  }
  onSubmit(form: FormGroup)
  {
    if(!window.confirm('Lưu khuyến mãi này ?'))
    {
      return;
    }
    if(form.value.percent>100)
    {
      alert('Giảm giá không vượt quá 100%')
      return;
    }
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
    if(form.value.price==''||this.checkPri==false)
    {
      this.sale.Price=0;
    }
    this.sale.Percent=form.value.percent;
    if(form.value.percent==''|| this.checkPer==false)
    {
      this.sale.Percent=0;
    }
    if(this.checkAll==true)
    {
      this.sale.Brand=0;
      this.sale.Cate=0;
    
    }
    console.log(form.value);
    console.log(this.sale);
    this.productService.Promotion(this.sale).subscribe(data=>{
      if(data.status==200)
      {
        alert('Đã lưu khuyến mãi')
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
  resetp(cate:number,brand:number,pro:number)
  {
    this.reset.brandId=brand;
    this.reset.cateId=cate;
    this.reset.proId=pro;
    console.log(this.reset);
    this.productService.resetPromotion(this.reset).subscribe(data=>{
      if(data.status==200)
      {
        alert(data.msg);
        this.productService.getAllProduct().subscribe(data=>{
          this.POSTS=data.pro;
        })
      }
    })
  }
  filter(id:string)
  {
    if(id=='1')
    {
      this.productService.getAllProduct().subscribe(data=>{
        this.POSTS=data.pro;
        this.backup=data.pro;
        this.page=1;
      })
    }else {
      this.productService.getSaleProduct().subscribe(res=>{
        this.POSTS=res.pro;
        this.backup=res.pro;
        this.page=1;
      })
    }
  }
  choose1(id:string)
  {
    if(id=='0')
    {
      this.choose=0;
    }
    if(id=='1')
    {
      this.choose=1;
    }
    if(id=='2')
    {
      this.choose=2;
    }
  }

  choose2(id:string)
  {
    this.reset.proId=0;
    this.reset.brandId=0;
    this.reset.cateId=Number.parseInt(id);
    
  }
  choose3(id:string)
  {
    this.reset.proId=0;
    this.reset.cateId=0;
    this.reset.brandId=Number.parseInt(id);
  }
  resetPrice()
  {
    if(!window.confirm('Đặt lại giá cho sản phẩm ?'))
    {
      return;
    }
    if(this.choose==0)
    {
      this.reset.brandId=0;
      this.reset.cateId=0;
      this.reset.proId=0;
    }
    this.productService.resetPromotion(this.reset).subscribe(res=>{
      if(res.status==200)
      {
        alert(res.msg);
        this.productService.getAllProduct().subscribe(data=>{
          this.POSTS=data.pro;
          this.backup=data.pro;
        })
      }
    })
  }
}
