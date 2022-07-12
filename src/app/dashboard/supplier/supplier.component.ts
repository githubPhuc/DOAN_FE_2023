import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor(private supService:SupplierService,private dialog:DialogService) { }
  supplier:any
  ngOnInit(): void {

    this.supService.getAllSupplier().subscribe(data=>{
      this.supplier=data.sup;
    })
  }

  remove(id:number)
  {
    if(window.confirm('Bạn có muốn xoá ?'))
    {
      this.supService.removeSupplier(id).subscribe(data=>{
        if(data.status=200)
        {
          alert(data.msg);
          this.supService.getAllSupplier().subscribe(data=>{
            this.supplier=data.sup;
          })
        }
      })
    }
  }

  openEdit(id:number)
  {
    this.dialog.openDialogEditSup(id);
  }
}
