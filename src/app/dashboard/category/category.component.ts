import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../category.service';
import { DialogService } from '../dialog.service';
import { NgForm } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})


export class CategoryComponent implements OnInit {

  constructor(private responseCate:CategoryService,
              private ress:DialogService,
              private router:Router) { }


  category:any;
    token!:string;
    tk:any;
  ngOnInit(): void {

      this.responseCate.getAllCategory().subscribe(data => {
        this.category=data;
        
        console.log(data);
      });

     this.token= jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4wMSIsImp0aSI6ImRhMGE5MzI3LWYxN2QtNDE0MC05NTE0LWExYjMyZTg2YmU4YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU0NjEyODUwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDQzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA0MyJ9.n4s7oCH105xo8Zz-6tGwCjgNknunOVvST3o3X7s7Q3o');

     
  }

  //them danh muc
  cate=new CategoryModel("Gaming7",1,true);




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
        console.log(data);
       
      }); 

      window.location.reload();
  }


  public logOut()
  {
    alert("ok");
    window.localStorage.clear();
    this.router.navigate(['/'+'auth/login']); 

  }
}
