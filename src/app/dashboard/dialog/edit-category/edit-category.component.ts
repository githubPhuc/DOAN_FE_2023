import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../../category.service';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl(''),


  });
  constructor(private cateService:CategoryService,@Inject(MAT_DIALOG_DATA) private data:any,private dialogR:DialogService) { }

  data1:any;
  ngOnInit(): void {
    this.cateService.getCategory(this.data.id).subscribe(data2=>{
      this.categoryForm.patchValue(data2);
    });
  }
catedata=new CategoryModel(0,"",0,true);


  onSubmit(form:FormGroup)
  {
    this.cateService.putCategory(this.data.id,form.value.name,true).subscribe(data=>{
 
    });
    this.closeDialog();
    location.reload();
  }

  closeDialog()
  {
 
   this.dialogR.closeDialog();
  }
}
