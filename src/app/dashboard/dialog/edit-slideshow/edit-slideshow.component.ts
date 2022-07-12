import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-edit-slideshow',
  templateUrl: './edit-slideshow.component.html',
  styleUrls: ['./edit-slideshow.component.scss']
})
export class EditSlideshowComponent implements OnInit {
  slide1:any;
  img:any;
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
    link: new FormControl(''),
    Image: new FormControl('')


  })
  constructor(private http:HttpClient,private dialog:DialogService,@Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {
    this.http.get<any>('https://localhost:7043/api/slideshow/getslideshowdetail?id='+this.data.id.toString(),).subscribe(res=>{
      console.log(res);
      this.slide1=res;
      this.slideForm.patchValue(res);
     
    });

  
  }

  slide= {
    link: '',
    image: '1'
  }
  onSubmit(form: FormGroup)
  {

    this.slide.link=form.value.link;
    //
    this.http.post<any>('https://localhost:7043/api/slideshow/editslideshow?id='+this.data.id,this.slide).subscribe(data=>{
      if(data.status==200)
      {
        if(this.formData1==null)
        {
          return;
        }
         this.formData1.append('ImageFile', this.fileToUpload);
        this.http.post<any>('https://localhost:7043/api/slideshow/UpdateImage?id='+this.data.id,this.formData1).subscribe(data=>{

        })
        alert("Cập nhật thành công");
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
         this.img=event.target?.result;
        })
      }
    } else {
      this.isImageSelected = false
    }
  }

}
