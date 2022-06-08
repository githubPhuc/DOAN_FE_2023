import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private cateService:CategoryService) { }

  ngOnInit(): void {
  }

  cate=new CategoryModel("a",1,true);
  addCategory()
  {
    this.cateService.postCategory(this.cate);
  }
}
