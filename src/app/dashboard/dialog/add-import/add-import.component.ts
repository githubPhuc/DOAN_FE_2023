import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../dialog.service';
import { ImportService } from '../../import/import.service';
import { InvoiceService } from '../../invoice/invoice.service';
import { ProductService } from '../../product/product.service';
import { SupplierService } from '../../supplier/supplier.service';

@Component({
  selector: 'app-add-import',
  templateUrl: './add-import.component.html',
  styleUrls: ['./add-import.component.scss']
})
export class AddImportComponent implements OnInit {
  product:any;
  supplier:any;

  itemForm = new FormGroup({
    sanPham: new FormControl(''),
    nhaCungCap: new FormControl(''),
    gia: new FormControl(''),
    soLuong: new FormControl(''),


  });
  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
                                        private dialogR:DialogService,
                                        private proService:ProductService,
                                        private supService:SupplierService,
                                        private importService:ImportService) { }

  ngOnInit(): void {
    this.proService.getAllProduct().subscribe(data1=>{
      this.product=data1;
    });

    this.supService.getAllSupplier().subscribe(data1=>{
      this.supplier=data1;
    })

  }
  gia:any;
  ncc:any;
  soluong:any;
  sanpham:any;
  onSubmit(form:FormGroup)
  {
    this.gia=form.value.gia.toString();
    this.ncc=form.value.nhaCungCap.toString();
    this.soluong=form.value.soLuong.toString();
    this.sanpham=form.value.sanPham.toString();
    console.log(form.value);
    this.importService.addImportItem(this.gia,this.ncc,this.soluong,this.sanpham).subscribe(data=>{
      if(data==200)
      {
        alert(data.msg);
        this.dialogR.closeDialog();
        location.reload();
      }
    })
  }
}
