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
  lstItem1:any=[];
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
 
    // this.proService.getAllProduct().subscribe(data1=>{
    //   this.product=data1.pro;
    //   this.itemForm.value.sanPham.patchValue(1);
      
      
    // });
    
    this.supService.getAllSupplier().subscribe(data1=>{
      this.supplier=data1.sup;
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
    if(form.value.nhaCungCap==''||form.value.nhaCungCap==null)
    {
      this.ncc=this.supplier[0].id;
    }
    this.soluong=form.value.soLuong.toString();

    if(this.sanpham==null)
    {
     
      return;
    }
 
    console.log(form.value);
    this.lstItem1.push(this.data);
    localStorage.setItem('item1',this.lstItem1);
    this.importService.addImportItem(this.gia,this.ncc,this.soluong,this.sanpham).subscribe(data=>{
      if(data.status==200)
      {
        //alert(data.msg);
        this.dialogR.closeDialog();
        
      }
      location.replace(location.href);
    })
  }

  review(txts:string)
  {
    if(txts=='')
    {
    this.product=null;
    }
    this.proService.searchProduct(txts).subscribe(data=>{
    this.product=data.pro;
    });
  }
  selected(name:string,id:number)
  {
   this.product=null;
    let a=document.querySelector('#sp');
    this.itemForm.patchValue({'sanPham':name});
    this.sanpham=id;
  }
}
