import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/dashboard/dialog.service';




@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private router: Router, private dialog:DialogService) { }

  username:any;
  useravatar:any;
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
     
      this.router.navigate(['/'+'shop/home']); 
      
    }

    this.username=window.localStorage.getItem('username');
  }

 public logOut()
  {
    this.dialog.openDialogConfirm('Bạn có muốn đăng xuất ?');
    

  }
  
}


