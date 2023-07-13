import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDepotService } from '../product-depot.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-sale',
  templateUrl: './price-sale.component.html',
  styleUrls: ['./price-sale.component.scss']
})
export class PriceSaleComponent  implements OnInit {

  NameWeb;
  id;
  price;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private productDepotService:ProductDepotService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name,
    this.id=data.id
    this.price=data.price
  }
  Data:any;
  username:any;
  
  ngOnInit(): void {
    this.username = localStorage.getItem('username')!;
  }
  update = new FormGroup({
    priceSale: new FormControl(''),
  });
  public SetPriceSale(form:FormGroup)
  {
    if(form.value.priceSale==null||form.value.priceSale==''||form.value.priceSale=='undefined'||parseInt(form.value.priceSale)<0)
      {
        return this.toastr.ShowError('priceSale is null!',' Please check again!');
      }
      console.log(this.id,form.value.priceSale);
      this.productDepotService.SetPriceSale(this.id,form.value.priceSale).subscribe((dataT: { status: any; message: any; }) => {
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.message);
          return location.reload();
        }
        else{
          return this.toastr.ShowError('Error!',dataT.message);
        
        }
      });    
    
    
  }
    
  
}
