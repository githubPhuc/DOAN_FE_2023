import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-slide-show-create',
  templateUrl: './slide-show-create.component.html',
  styleUrls: ['./slide-show-create.component.scss']
})
export class SlideShowCreateComponent implements OnInit {
  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;
  fileToUpload:any;
  id!:number;
  name:any;
  path:any;
  src:any;
  fileName:any;
  formData1= new FormData();
  slideForm= new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),

  })
  constructor(private http:HttpClient,private dialog:DialogService) { }

  ngOnInit(): void {
  }

  slide= {
    title: '',
    content: '',
    image: '1'
  }
  onSubmit(form: FormGroup)
  {
    this.slide.title=form.value.title;
    this.slide.content=form.value.content;
    //
    this.http.post<any>('https://localhost:7043/api/slideshow/postslideshow',this.slide).subscribe(data=>{
      if(data.status==200)
      {
        this.name=this.fileToUpload.name;
        let filename=this.name.split('.');
        this.name=filename[1];
        this.fileName=data.id+'.'+this.name;
         this.formData1.append('ImageFile', this.fileToUpload, this.fileToUpload.name);
        this.http.post<any>('https://localhost:7043/api/slideshow/upload?id1='+data.id,this.formData1).subscribe(data=>{

        })
        alert("Thêm thành công");
        this.dialog.closeDialog();
        location.reload();
      }
    });

  }
  uploadFile(files:any, event: Event){
  
    this.fileToUpload = <File>files[0];
   
    
    console.log('ímg',this.formData1);
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
