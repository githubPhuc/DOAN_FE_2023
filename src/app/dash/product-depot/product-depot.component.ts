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
      this.title="Inventory report"     
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
  public SetPriceOnProduct(id:number)
  {
    if(window.confirm('Do you want to Update price product with id equal to '+id+' ?'))
    {
      this.productDepotService.SetPriceOnProduct(id).subscribe((dataT: { status: any; message: any; }) => {
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.message);
          this.ngOnInit();
        }
        else{
          this.toastr.ShowError('Error!',dataT.message);
          return;
        }
       
      });    
    }
    
  }

}
