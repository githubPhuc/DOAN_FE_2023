import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../category.service';
import { DialogService } from '../dialog.service';

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
  cate=new CategoryModel("",1,true);
  postCategory()
  {
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


}
