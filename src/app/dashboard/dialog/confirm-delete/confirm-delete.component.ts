import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private router:Router,private dialogR:MatDialog) { }
  msg:any;
  ngOnInit(): void {
    this.msg=this.data.content;
  }
  accept()
  {
    this.dialogR.closeAll();
    
  }

  cancel()
  {
    this.dialogR.closeAll();
  }

}
