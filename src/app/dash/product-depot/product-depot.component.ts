import { Component, OnInit } from '@angular/core';
import { ProductDepotService } from './product-depot.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-depot',
  templateUrl: './product-depot.component.html',
  styleUrls: ['./product-depot.component.scss']
})
export class ProductDepotComponent implements OnInit {
  closeResult = '';

  constructor(private productDepotService:ProductDepotService,
              private toastr:NotifierService,
              private router:Router,
              
      ) { }
    Data:any;
    title:any;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.productDepotService.GetList("","").subscribe(res=>{
      this.Data=res.acc;
    })
      this.title="Product Depot"     
  }
  searchForm = new FormGroup({
    nameDepot: new FormControl(''),
    nameProduct: new FormControl(''),//0901554061
   
  });
  public Search(form:FormGroup) {
    this.productDepotService.GetList(form.value.nameDepot,form.value.nameProduct).subscribe(res=>{
      this.Data=res.acc;
    })
  }

}
