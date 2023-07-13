import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-success',
  templateUrl: './show-success.component.html',
  styleUrls: ['./show-success.component.scss']
})
export class ShowSuccessComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private dialogR:MatDialog) { }
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
