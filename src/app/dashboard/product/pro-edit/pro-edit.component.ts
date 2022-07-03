import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from '../../category.service';
import { TrademarkService } from '../../trademark/trademark.service';
import { ProductModel } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pro-edit',
  templateUrl: './pro-edit.component.html',
  styleUrls: ['./pro-edit.component.scss']
})
export class ProEditComponent implements OnInit {

  constructor(private cateService:CategoryService,private proService:ProductService,private route: ActivatedRoute,private tradeService:TrademarkService,private router:Router) { }
  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;
  formData:any;
  fileToUpload:any
  fileName:any;
  name!:string;
  category:any;
  product:any;
  brand:any;
  id!: number;
  private sub: any;
  lstImg:any=[];
  pro=new ProductModel('','1',1,1,1,1,5,'1','1','1','1','1','1','','','','','');

  categoryForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    categoryId: new FormControl(),
    tradeMarkId: new FormControl(''),
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

  ngOnInit(): void {
    this.cateService.getAllCategory().subscribe(data=>{
      this.category=data;
    });

    this.tradeService.getAllTrademark().subscribe(data=>{
      this.brand=data;
     
    })

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      
      this.proService.getProduct(this.id).subscribe(data=>{
        this.product=data.pro;
        console.log(data.pro)
        this.categoryForm.patchValue(data.pro);
        this.pro.CategoryId=data.categoryId;
        this.pro.TradeMarkId=data.tradeMarkId;
        if(data.image!='')
        {
          this.imagePreviewSrc='../../../../assets/img/product/'+data.pro.image;
          this.isImageSelected=true;
        }
       
       
        for(let i of data.img)
        {
          this.lstImg.push(i.image);
        }
        console.log(this.lstImg);
      })


   });
  }

 

  onSubmit(form:FormGroup)
  {
    this.pro.Name=form.value.name;
    this.pro.Description=form.value.description;
    this.pro.Price=form.value.price;
    this.pro.Quantily=form.value.stock;
    this.pro.CategoryId=form.value.categoryId;
    this.pro.TradeMarkId=form.value.tradeMark;
    this.pro.Star=5;
    this.pro.CPU=form.value.cpu;
    this.pro.DesignStyle=form.value.designStyle;
    this.pro.Monitor=form.value.monitor;
    this.pro.Ram=form.value.ram;
    this.pro.SizeWeight=form.value.sizeWeight;
    this.pro.VGA=form.value.vga;
    this.pro.HardDisk=form.value.hardDisk;
    this.pro.OS=form.value.os;
    this.pro.Port=form.value.port;
    this.pro.ReleaseTime=form.value.releaseTime;

  console.log(this.pro);
  this.proService.editProduct(this.pro,this.id).subscribe(data=>{
      if(data.status==200)
      {
  
        if(this.fileToUpload!=null)
        {
          this.name=this.fileToUpload.name;
          let filename=this.name.split('.');
          this.name=filename[1];
          this.fileName=this.id+'.'+this.name;

          //
          this.formData = new FormData();

          this.formData.append('ImageFile', this.fileToUpload, this.fileName);
          this.proService.uploadEdit(this.formData).subscribe(data1=>{

          });
        }
        alert('Cập nhật thành công')
        this.router.navigate(['/admin/product']);
        
      }
  })

  }

  uploadFile(files:any,event: Event){
  
    this.fileToUpload = <File>files[0];

    console.log('form',this.fileToUpload);
    let selectedFile = (event.target as HTMLInputElement).files?.item(0);
    if (selectedFile) {
      if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);

        fileReader.addEventListener('load', (event) => {
          this.imagePreviewSrc = event.target?.result;
          this.isImageSelected = true
        })
      }
    } else {
      this.isImageSelected = false
    }
  }

}
