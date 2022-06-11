import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private router:Router,private dialogR:MatDialog) { }
  msg:any;
  ngOnInit(): void {
    this.msg=this.data.content;
  }
  accept()
  {
    window.localStorage.clear();
    this.dialogR.closeAll();
    this.router.navigate(['/'+'auth/login']); 
    
  }

  cancel()
  {
    this.dialogR.closeAll();
  }

}
