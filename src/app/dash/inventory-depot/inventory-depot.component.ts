import { Component, OnInit } from '@angular/core';
import { ProductDepotService } from '../product-depot/product-depot.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-depot',
  templateUrl: './inventory-depot.component.html',
  styleUrls: ['./inventory-depot.component.scss']
})
export class InventoryDepotComponent implements OnInit {
  closeResult = '';

  constructor(private productDepotService:ProductDepotService,
              private toastr:NotifierService,
              private router:Router
      ) { }
    Data:any;
    title:any;
    countView!:number;
    countQuantity!:number;
    countPrice!:number;
    count!:number;
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.productDepotService.inventoryDepot().subscribe(res=>{
      this.Data=res.data;
      this.countView=res.countView;
      this.countQuantity=res.countQuantity;
      this.countPrice=res.countPrice;
    })
    this.title="Inventory Depot"  ;  
  }

}
