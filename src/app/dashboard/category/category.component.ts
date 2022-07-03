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
    dataT:any;

    searchForm = new FormGroup({
      txtSearch: new FormControl(''),
  
    });
  ngOnInit(): void {

      this.responseCate.getAllCategory().subscribe(data => {
        this.category=data;
        this.dataT=data;
        console.log(data);
      });


     
  }

  //them danh muc
  cate=new CategoryModel(0,"Gaming7",1,true);




  deleteCategory(id:number)
  {
    this.responseCate.deleteCategory(id)
      .subscribe(data => {
        console.log(data);
        if(data==200)
        {
         
          window.location.reload();
        }
        
      }); 
   
  }


  categoryForm = new FormGroup({
    name: new FormControl(''),

  });


  onSubmit(form:FormGroup) {
    // TODO: Use EventEmitter with form value
    console.warn(this.categoryForm.value);
    if(form.value.name==null||form.value.name=='')
    {
      return;
    }
    this.cate.name=form.value.name;
    console.log(this.cate);
    this.responseCate.postCategory(this.cate)
      .subscribe(data => {
        console.log(data);
       
      }); 
     

      window.location.reload();
  }

  onSubmit1(form:FormGroup)
  {
    if(form.value.txtSearch=='')
    {
      this.category=this.dataT;
    }
    this.responseCate.searchCategory(form.value.txtSearch)
      .subscribe(data => {
        console.log(data);
        this.category=data;
       
      }); 
  }


  public logOut()
  {
    alert("ok");
    window.localStorage.clear();
    this.router.navigate(['/'+'auth/login']); 

  }

  public edit(id:number)
  {
    this.ress.openDialogEditCate(id);
  }

  public delete(id:number)
  {
    this.ress.openDialogEditCate(id);
  }

  public test()
  {
      this.responseCate.test().subscribe(dataq=>{
        alert(dataq.msg);
      })
  }
}
