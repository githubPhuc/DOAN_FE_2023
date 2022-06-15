import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../../category.service';
import { ProductModel } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pro-create',
  templateUrl: './pro-create.component.html',
  styleUrls: ['./pro-create.component.scss']
})
export class ProCreateComponent implements OnInit {

  constructor(private responseCate:CategoryService,private router:Router,private responsePro:ProductService,private httpClient:HttpClient) { }

  category:any;
  selectId="";
  progress!: number;
  message!: string;
  formData:any;
  @Output() public onUploadFinished = new EventEmitter();
  ngOnInit(): void {

    this.responseCate.getAllCategory().subscribe(data=>{
      this.category=data;
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



});
pro=new ProductModel('1f22','1',1,1,1,'1',5,'1','1','1','1','1','1');

dta={
  Name: 'á',
  Descriptin: 'á',
  Price: 1,
  Quantily: 1,
  CategoryId: 1,
  TradeMark: 'á',
  Star: 5,
  CPU: 'á',
  DesignStyle: 'á',
  Monitor: 'á',
  RAM: 'á',
  SizeWeight: 'a',
  VGA: 'á'
}
onSubmit(form:FormGroup) {
  this.pro.Name=form.value.name;
  this.pro.Description=form.value.description;
  this.pro.Price=form.value.price;
  this.pro.Quantily=form.value.quantily;
  this.pro.CategoryId=1;
  this.pro.TradeMark=form.value.tradeMark;
  this.pro.Star=5;
  this.pro.CPU=form.value.cpu;
  this.pro.DesignStyle=form.value.designStyle;
  this.pro.Monitor=form.value.monitor;
  this.pro.Ram=form.value.ram;
  this.pro.SizeWeight=form.value.sizeWeight;
  this.pro.VGA=form.value.vga;




  console.log('xxxxxxxxxxxxxxxxx',this.pro);
  this.responsePro.postProduct(this.pro,this.formData).subscribe(data=>{
      if(data.status==200)
      {
        alert("Thêm thành công");
        this.router.navigate(['/admin/product']);
      }else{
        alert("Vui lòng kiểm tra lại thông tin !")
      }
  });



}




fileName='';
nFileSelected(event:any) {

  const file:File = event.target.files[0];

  if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      

      const upload$ = this.httpClient.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
  }}





  uploadFile(files:any){
  
    let fileToUpload = <File>files[0];
   this.formData = new FormData();
    this.formData.append('ImageFile', fileToUpload, fileToUpload.name);

    console.log('ímg',this.formData);
  }
}
