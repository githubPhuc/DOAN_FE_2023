import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DialogService } from 'src/app/dashboard/dialog.service';
import { InvoiceService } from 'src/app/dashboard/invoice/invoice.service';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  user:any;
  check:number=0;
  constructor(private shopService:ShopService,
              private invoiceService:InvoiceService,
              private dialog:DialogService,
              private router:Router) { }

  isLogin!:boolean;
  invoice:any;
  profileForm = new FormGroup({
    fullName: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    passwordConfirm: new FormControl(''),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    newPassword: new FormControl(''),
 

  });
  get proFormControl()
  {
    return this.profileForm.controls
  }

  ngOnInit(): void {
    this.fetchPosts();
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
    if(localStorage.getItem('token')==null)
    {
      this.isLogin=false;
      this.router.navigate(['/auth/login'])
   
    }else
    {
      this.isLogin=true;
    }
    if(localStorage.getItem('role')=='Admin')
    {
      this.router.navigate(['/admin'])
      return;
    }
    
    this.shopService.getAccount(localStorage.getItem('userid')!).subscribe(data=>{
      this.user=data;
      this.profileForm.patchValue(data);
      console.log('pro',data);
    })

    this.invoiceService.getAllInvoiceUser(localStorage.getItem('userid')!).subscribe(data=>{
      this.invoice=data;
    })
   
  }
  view(id:number)
  {
    this.dialog.opentDialog1(id);
  }

  logOut()
  {
    window.localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
  

  onSubmit(form:FormGroup)
  {
    
    const  data={
      Id:localStorage.getItem('userid'),
      Email:form.value.email,
      Phone:form.value.phone,
      Address:form.value.address,
      Password:form.value.password

    }
    if(form.value.newPassword==form.value.passwordConfirm&&form.value.newPassword!=null)
    {
      data.Password=form.value.passwordConfirm;
     
    }else
    {
      this.check=1;
      return;
    }
    
    
    this.shopService.editProfile(data).subscribe(res=>{
      alert(res.msg);

      location.reload();
    })

    console.log(data);
  }

  cancel(id:number)
  {
    if(window.confirm('Bạn có muốn huỷ đơn hàng này ?'))
    {
      this.shopService.Cancel(id).subscribe(res=>{
        if(res.status==200)
        {
          alert(res.msg);
          this.invoiceService.getAllInvoiceUser(localStorage.getItem('userid')!).subscribe(data=>{
            this.invoice=data;
          });
        }
      })
    }
  }

  filter(sts:any)
  {
   let status=sts;
   if(sts==0)
   {
     this.invoiceService.getAllInvoice().subscribe(data=>{
       this.invoice=data.inv;
       this.POSTS=data.inv;
       console.log(data);
       
     });
     return;
   }
   this.invoiceService.getInvoiceByStatus(status).subscribe(res=>{
     this.invoice=res.inv;
   })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.invoiceService.getAllInvoiceUser(localStorage.getItem('userid')!).subscribe(data=>{
      this.POSTS=data;
    })
  }
}
