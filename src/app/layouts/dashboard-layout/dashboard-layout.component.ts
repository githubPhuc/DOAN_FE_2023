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

  ngOnInit(): void {
    if(localStorage.getItem('role')=='')
    {
      this.router.navigate(['/'+'shop']); 
    }
  }

 public logOut()
  {
    this.dialog.openDialogConfirm('Bạn có muốn đăng xuất ?');
    

  }
  
}


