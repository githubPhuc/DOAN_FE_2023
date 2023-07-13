import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../dialog.service';
import { TrademarkService } from '../../trademark/trademark.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.scss']
})
export class EditBrandComponent implements OnInit {
  img:any;
  img1:any;
  imgshow:any;
  categoryForm = new FormGroup({
  
    name: new FormControl(''),


  });
  constructor(private tradeService:TrademarkService,@Inject(MAT_DIALOG_DATA) private data:any,private dialogR:DialogService) { }

  data1:any;
  ngOnInit(): void {
      this.tradeService.getTrademark(this.data.id).subscribe(res=>{
        this.imgshow=res.image;
       this.categoryForm.patchValue(res);
      
      })
  }


  uploadFileShow(file: any, event:Event)
  {
    this.img=<File>file[0];
    let selectedFile1 = (event.target as HTMLInputElement).files?.item(0);
    if (selectedFile1) {
      if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile1.type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile1);

        fileReader.addEventListener('load', (event) => {
        
          this.img1=event.target?.result;
  
        })
      }
    } 
  }
  onSubmit(form:FormGroup)
  {
  let  formData=new FormData();
  formData.append('image',this.img);
  this.tradeService.EditTrademarkImg(formData,this.data.id).subscribe(res=>{
    
  })
    let bra= {
  
      Name: form.value.name
    }
    this.tradeService.EditTrademark(this.data.id,bra).subscribe(res=>{
      if(res.status==500)
      {
        alert(res.msg);
      }
      if(res.status==200)
      {
        this.closeDialog();
        location.reload();
      }
    });
   
  }

  closeDialog()
  {
 
   this.dialogR.closeDialog();
  }

}
