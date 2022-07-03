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

  categoryForm = new FormGroup({
  
    name: new FormControl(''),


  });
  constructor(private tradeService:TrademarkService,@Inject(MAT_DIALOG_DATA) private data:any,private dialogR:DialogService) { }

  data1:any;
  ngOnInit(): void {
      this.tradeService.getTrademark(this.data.id).subscribe(res=>{
       this.categoryForm.patchValue(res);
      
      })
  }



  onSubmit(form:FormGroup)
  {
    let bra= {
  
      Name: form.value.name
    }
    this.tradeService.EditTrademark(this.data.id,bra).subscribe(res=>{
    
    });
    this.closeDialog();
    location.reload();
  }

  closeDialog()
  {
 
   this.dialogR.closeDialog();
  }

}
