import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pro-edit',
  templateUrl: './pro-edit.component.html',
  styleUrls: ['./pro-edit.component.scss']
})
export class ProEditComponent implements OnInit {

  constructor(private cateService:CategoryService,private proService:ProductService,private route: ActivatedRoute) { }

  txt='style="color: red;"';
  category:any;
  product:any;
  id!: number;
  private sub: any;

  categoryForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    category: new FormControl(''),
    tradeMark: new FormControl(''),
    image: new FormControl(File),
    categoryid: new FormControl(''),
    cpu: new FormControl(''),
    designStyle: new FormControl(''),
    monitor: new FormControl(''),
    ram: new FormControl(''),
    sizeWeight: new FormControl(''),
    vga: new FormControl(''),
    
  
  });

  ngOnInit(): void {
    this.cateService.getAllCategory().subscribe(data=>{
      this.category=data;
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      
      this.proService.getProduct(this.id).subscribe(data=>{
        this.product=data;
        this.categoryForm.patchValue(data);
  
        console.log(data);
      })


   });
  }

 

  onSubmit(form:FormGroup)
  {
    alert(form.value.category);
  }
}
