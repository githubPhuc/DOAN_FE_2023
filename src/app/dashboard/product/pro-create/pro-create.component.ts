import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/category-model';
import { CategoryService } from '../../category.service';
import { ProductModel } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pro-create',
  templateUrl: './pro-create.component.html',
  styleUrls: ['./pro-create.component.scss']
})
export class ProCreateComponent implements OnInit {

  constructor(private responseCate:CategoryService,private router:Router,private responsePro:ProductService) { }

  category:any;
  selectId="";
  ngOnInit(): void {

    this.responseCate.getAllCategory().subscribe(data=>{
      this.category=data;
    })
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   goTo(location:string) { 
    this.router.navigate(['/'+location]); 
 } 

 categoryForm = new FormGroup({
  name: new FormControl(''),
  description: new FormControl(''),
  price: new FormControl(''),
  quantity: new FormControl(''),
  category: new FormControl(''),
  trademark: new FormControl(''),
  image: new FormControl(''),
  categoryid: new FormControl(''),

});
pro=new ProductModel("a","a",1,1,1,"a",5,null!,true);

onSubmit(form:FormGroup) {
  // TODO: Use EventEmitter with form value
  console.warn(this.categoryForm.value);
  this.pro.image=form.value.image;
  console.log(this.pro);
  this.responsePro.postProduct().subscribe(data=>{

  });

}
call(id:number)
{
  console.log("aaaaaaaaa",id)
}
uploadPersonaImage(e:any) {
  this.pro.image = e.target;
}
}
