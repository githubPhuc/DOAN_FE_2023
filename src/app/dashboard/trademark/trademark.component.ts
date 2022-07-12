import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from '../dialog.service';
import { TrademarkService } from './trademark.service';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.scss']
})
export class TrademarkComponent implements OnInit {

  tradeMark:any;
  frmData=new FormData();
  img:any;
  trademarkForm = new FormGroup({
    name: new FormControl(''),

  });
  searchForm = new FormGroup({
    txtSearch: new FormControl(''),

  });


  constructor(private tradeService:TrademarkService,private dialog:DialogService) { }

  ngOnInit(): void {
    this.tradeService.getAllTrademark().subscribe(data=>{
      this.tradeMark=data;
    })
  }

  onSubmit(form:FormGroup)
  {
    this.tradeService.PostTrademark(form.value.name).subscribe(data=>{
      if(data.status==500)
      {
        alert(data.msg);
      }
      if(data.status==200)
      {
        alert(data.msg);
        location.replace(location.href);

        this.frmData.append('image',this.img);
        console.log(this.frmData);
        this.tradeService.upload(this.frmData,data.id).subscribe(data1=>{

        })
      }
    })
  }
  onSubmit1(form:FormGroup)
  {
    this.tradeService.search(form.value.txtSearch).subscribe(res=>{
      this.tradeMark=res;
    })
  }

  edit(id:number)
  {
    this.dialog.openDialogEditBrand(id);
  }

  deleteTrademark(id:number)
  {
    if(window.confirm('Bạn có muốn xoá nhãn hiệu này ?'))
    {
      this.tradeService.DeleteTrademark(id).subscribe(data=>{
        if(data.status==200)
        {
          alert(data.msg);
          location.reload();
        }
      })
    }
 
  }

  imgReview:any;
  uploadFileShow(files:any,event:Event)
  {
    this.img=<File>files[0];
    console.log(this.img);

    //
    let selectedFile1 = (event.target as HTMLInputElement).files?.item(0);

    if (selectedFile1) {
      if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile1.type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(<File>files[0]);
        fileReader.addEventListener('load', (event) => {
          
          this.imgReview=event.target?.result;
        })
      }
    } 
  }
}
