import { Component, OnInit } from '@angular/core';
import { ProductDepotService } from './product-depot.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PriceSaleComponent } from './price-sale/price-sale.component';
import { MatDialog } from '@angular/material/dialog';

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
              private dialog:MatDialog,
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
      console.log(this.Data);
    })
      this.title="Depot Storage"     
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
  public SetPrice(id:number,price:number)
  {
    
    this.dialog.open(PriceSaleComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Price Sale',
        id:id,
        price:price
      }
    });
  }
  public SetStatus(id: number,idProduct:number)
  {
    
    if(window.confirm('Agree to update view user layout ?'))
    {
      this.productDepotService.SetStatus(id,idProduct).subscribe((dataT: { status: any; message: any; }) => {
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.message);
          return this.ngOnInit();
        }
        else{
          return this.toastr.ShowError('Error!',dataT.message);
        
        }
      
      });    
    }
    
  }
}
