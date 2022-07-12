import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopService } from 'src/app/shop/shop.service';
import { DialogService } from '../../dialog.service';


@Component({
  selector: 'app-choose-payment',
  templateUrl: './choose-payment.component.html',
  styleUrls: ['./choose-payment.component.scss']
})
export class ChoosePaymentComponent implements OnInit {
  phoneCheck:boolean=false;
  check:boolean=true;
  check1:boolean=false;

  phonecheck:boolean=true;
  phonecheck1:boolean=false;
  vnpay:boolean=true;
  money:boolean=false;
  cart:any;
  userid=localStorage.getItem('userid');
  address=localStorage.getItem('address');
  phone=localStorage.getItem('phone');
  itemForm=new FormGroup({
    address: new FormControl(''),
    note: new FormControl(''),
    phone:new FormControl('')
  })
  constructor(private shopSevice:ShopService, private dialog:DialogService) { }

  ngOnInit(): void {
    this.shopSevice.getCart(localStorage.getItem('userid')!).subscribe(res=>{
      this.cart=res;
    })
  }

  checked()
  {
    this.check=!this.check;
    this.check1=!this.check1;
  }
  checked1()
  {
    this.phonecheck=!this.phonecheck;
    this.phonecheck1=!this.phonecheck1;
  }
  tick()
  {
    this.vnpay=!this.vnpay;
    this.money=!this.money;
  }
  onSubmit(form:FormGroup)
  {
   
    if(this.check1==true&&form.value.address!=''&&form.value.address!=null)
    {
      form.value.phone='';
      this.address=form.value.address;
      localStorage.setItem('address',form.value.address);
    }
    if(this.phonecheck1==true&&form.value.phone!=''&&form.value.phone!=null)
    {
      if(form.value.phone.toString().length!=10)
      {
    
        this.phoneCheck=true;
        return;
      }
      //
      this.phone=form.value.phone;
      localStorage.setItem('phone',form.value.phone);
    }
    if(form.value.note==''||form.value.note==null)
    {
      form.value.note='';
    }
    if(this.vnpay==true)
    {
      localStorage.setItem('note',form.value.note)
      this.shopSevice.payment(Number.parseFloat(localStorage.getItem('total')!)*100).subscribe(data=>{
        window.location.href=data.url;
      });
    }else
    {
      
   
    this.shopSevice.order(this.userid!,this.address!,this.phone!,form.value.note).subscribe(res=>{
      if(res.status==200)
      {
        alert(res.msg);
        this.dialog.closeDialog();
        location.reload();
      }
    });
  }
  }
}
