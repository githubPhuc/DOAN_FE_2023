import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../../category.service';
import { TrademarkService } from '../../trademark/trademark.service';
import { ProductModel } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pro-create',
  templateUrl: './pro-create.component.html',
  styleUrls: ['./pro-create.component.scss']
})
export class ProCreateComponent implements OnInit {

  constructor(private responseCate:CategoryService,private router:Router,private responsePro:ProductService,private httpClient:HttpClient,private tradeService:TrademarkService) { }

  category:any;
  selectId="";
  progress!: number;
  message!: string;
  fileToUpload:any
  fileName:any;
  name!:string;
  brand:any;

  formData=new FormData();
  @Output() public onUploadFinished = new EventEmitter();
  ngOnInit(): void {

    this.responseCate.getAllCategory().subscribe(data=>{
      this.category=data;
    })

    this.tradeService.getAllTrademark().subscribe(data=>{
      this.brand=data;
    })
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   goTo(location:string) { 
    this.router.navigate(['/'+location]); 
 } 

 categoryForm = new FormGroup({
  name: new FormControl(''),
  description: new FormControl(''),
  price: new FormControl(''),
  quantily: new FormControl(''),
  categoryId: new FormControl(),
  tradeMark: new FormControl(''),
  cpu: new FormControl(''),
  designStyle: new FormControl(''),
  monitor: new FormControl(''),
  ram: new FormControl(''),
  sizeWeight: new FormControl(''),
  vga: new FormControl(''),
  hardDisk: new FormControl(''),
  os: new FormControl(''),
  port: new FormControl(''),
  releaseTime: new FormControl(''),




});
pro=new ProductModel('','',1,1,1,1,1,'','','','','','','','','','','',);


onSubmit(form:FormGroup) {

  this.pro.Name=form.value.name;
  this.pro.Description=form.value.description;
  this.pro.Price=form.value.price;
  this.pro.Quantily=form.value.quantily;
  this.pro.CategoryId=form.value.categoryId;
  this.pro.TradeMarkId=form.value.tradeMark;
  this.pro.Star=5;
  this.pro.CPU=form.value.cpu;
  this.pro.DesignStyle=form.value.designStyle;
  this.pro.Monitor=form.value.monitor;
  this.pro.Ram=form.value.ram;
  this.pro.SizeWeight=form.value.sizeWeight;
  this.pro.VGA=form.value.vga;
  this.pro.Image='noimage.png';
  this.pro.HardDisk=form.value.hardDisk;
  this.pro.OS=form.value.os;
  this.pro.Port=form.value.port;
  this.pro.ReleaseTime=form.value.releaseTime;
  

/*  this.formData.append('Name',form.value.name);
  this.formData.append('Description',form.value.description);
  this.formData.append('Price',form.value.price);
  this.formData.append('Quantily',form.value.quantily);
  this.formData.append('CategoryId','1');
  this.formData.append('TradeMark',form.value.tradeMark);
  this.formData.append('Star','1');
  this.formData.append('CPU',form.value.cpu);
  this.formData.append('DesignStyle',form.value.designStyle);
  this.formData.append('Monitor',form.value.monitor);
  this.formData.append('Ram',form.value.ram);
  this.formData.append('SizeWeight',form.value.sizeWeight);
  this.formData.append('VGA',form.value.vga);*/


  
  this.responsePro.postProduct(this.pro).subscribe(data=>{
    console.log(this.formData);
      if(data.status==200)
      {
        
        this.name=this.fileToUpload.name;
        let filename=this.name.split('.');
        this.name=filename[1];
        this.fileName=data.id+'.'+this.name;

        this.formData = new FormData();

        this.formData.append('ImageFile', this.fileToUpload, this.fileName);

        this.responsePro.upload(this.formData).subscribe(data=>{

        })
        alert("Thêm thành công");
        this.router.navigate(['/admin/product']);
      }else{
        alert("Vui lòng kiểm tra lại thông tin !")
      }
  });



}










  uploadFile(files:any){
  
    this.fileToUpload = <File>files[0];

 
    console.log('ímg',this.formData);
  }
}
