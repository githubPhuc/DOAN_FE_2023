import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../dialog.service';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  checkPer:boolean=true;
  checkPri:boolean=false;

  saleForm=new FormGroup({
    percent: new FormControl(''),
    price: new FormControl('')
  });

  sale= {
    Percent: 0,
    Price: 0,
    Pro: 0
  }
  constructor(@Inject(MAT_DIALOG_DATA) private data:any, private dialogR:DialogService,private saleService:ProductService ) { }

  ngOnInit(): void {
  }
  tick1()
  {
    let inp=document.getElementById('inp');
    this.checkPer=!this.checkPer;
    this.checkPri=!this.checkPri;
    if(this.checkPer==true)
    {
      inp?.setAttribute('formControlName','percent');
    }else
    {
      inp?.setAttribute('formControlName','price');
    }

  }

  onSubmit(form:FormGroup)
  {
    if(this.checkPer==true)
    {
      this.sale.Percent=form.value.percent;
      this.sale.Price=0;
    }else
    {
      this.sale.Price=form.value.percent;
      this.sale.Percent=0;
    }
    
    this.sale.Pro=this.data.id;
    if(this.sale.Pro==null||this.sale.Pro==0)
    {
      return;
    }

    this.saleService.Promotion(this.sale).subscribe(data1=>{
        if(data1.status==200)
        {
          this.dialogR.closeDialog();
          location.reload();
        }
    })
  }
}
