import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../category.service';
import { DialogService } from '../dialog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})


export class CategoryComponent implements OnInit {

  constructor(private responseCate:CategoryService,
              private ress:DialogService) { }


  category:any;
 
  ngOnInit(): void {

  this.responseCate.getAllCategory().subscribe(data => {
    this.category=data;
    
    console.log(data);
  });
  }

  //them danh muc
  cate=new CategoryModel("Gaming7",1,true);
  postCategory()
  {
    console.log(this.cate);
    this.responseCate.postCategory(this.cate)
      .subscribe(data => {
        console.log(data)
      }); 
  }



  deleteCategory()
  {
    this.responseCate.deleteCategory(3)
      .subscribe(data => {
        console.log(data)
      }); 
  }


  categoryForm = new FormGroup({
    name: new FormControl(''),

  });


  onSubmit(form:FormGroup) {
    // TODO: Use EventEmitter with form value
    console.warn(this.categoryForm.value);

    this.cate.name=form.value.name;
    console.log(this.cate);
    this.responseCate.postCategory(this.cate)
      .subscribe(data => {
        console.log(data)
      }); 
  }
}
