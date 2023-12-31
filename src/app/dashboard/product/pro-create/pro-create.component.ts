import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;
  images: any[] = [];
  category:any;
  selectId="";
  progress!: number;
  message!: string;
  fileToUpload:any
  fileName:any;
  name!:string;
  brand:any;
  imgShowReview:any;
  formData=new FormData();
  formData1=new FormData();
  frm=new FormData();

  imgshow:any;
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
  fileSource: new FormControl(''),




});
pro=new ProductModel('','',1,0,1,1,1,'','','','','','','','','','','',);


onSubmit(form:FormGroup) {

  this.pro.Name=form.value.name;
  this.pro.Description=form.value.description;
  this.pro.Price=form.value.price;

  this.pro.CategoryId=form.value.categoryId;
  if(form.value.categoryId==null||form.value.categoryId=='')
  {

    this.pro.CategoryId=this.category[0].id;
  }
  this.pro.TradeMarkId=form.value.tradeMark;
  if(form.value.tradeMark=null||form.value.tradeMark=='')
  {
    this.pro.TradeMarkId=this.brand[0].id;
  }
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
  



  
  this.responsePro.postProduct(this.pro).subscribe(data=>{
    console.log(this.formData);
      if(data.status==200)
      {
        
    

        for(let i of this.lstImg)
        {
          this.formData1.append('image',i);
        }

        this.formData.append('ImageFile', this.fileToUpload, this.fileName);

        this.responsePro.upload(this.formData1,data.id).subscribe(data=>{

        })
       
        this.frm.append('image',this.imgshow);
        console.log('imgas',this.frm)
        this.responsePro.uploadShow(this.frm,data.id).subscribe(data=>{

        })
        alert("Thêm thành công");
        this.router.navigate(['/admin/product']);
      }else{
        alert("Vui lòng kiểm tra lại thông tin !")
      }
  });

  

}

  lstImg:any=[];
  uploadFile(files:any,event:Event){
    
    this.fileToUpload = <File>files[0];

    //this.formData1.append('image',this.fileToUpload);

  
  
    console.log('ímg',this.formData1);

    let selectedFile = (event.target as HTMLInputElement).files?.item(0);

    if (selectedFile) {
      if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(<File>files[0]);
        fileReader.addEventListener('load', (event) => {
          this.imagePreviewSrc = event.target?.result;
          this.images.push(event.target?.result);
          this.lstImg.push(<File>files[0]);
          this.isImageSelected = true
        })
      }
    } else {
      this.isImageSelected = false
    }
  }
  lstImg1:any=[];
  uploadFileShow(files1:any,event:Event){
    
    let selectedFile1 = (event.target as HTMLInputElement).files?.item(0);

    if (selectedFile1) {
      if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile1.type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(<File>files1[0]);
        fileReader.addEventListener('load', (event) => {
          this.imgShowReview = event.target?.result;
       
        })
      }
    } 

    //this.formData1.append('image',this.fileToUpload);
    
    
    this.lstImg1.push(<File>files1[0]);
    this.imgshow=<File>files1[0];
    this.imgShowReview=this.imgshow;
  
  }


  onFileChange(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
    
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result); 
    
                   this.categoryForm.patchValue({
                      fileSource: this.images
                   });
                }
   
                reader.readAsDataURL(event.target.files[i]);
        }
    }
}
removeImg(url:any)
{
  let c=0;
  let c1=-1;
  for(let u of this.images)
  {
    c++;
    if(u==url)
    {
      //c1=c;
      break;
    }
  }
  this.images = this.images.filter((a) => a !== url);
  this.lstImg.splice(c-1,1);
  console.log(c,this.lstImg);

 
}
}