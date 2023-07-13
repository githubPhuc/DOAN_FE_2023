import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../../dialog.service';
import { ImportService } from '../../import/import.service';

@Component({
  selector: 'app-import-detail',
  templateUrl: './import-detail.component.html',
  styleUrls: ['./import-detail.component.scss']
})
export class ImportDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any, private dialogR:DialogService,private importService:ImportService) { }
  data1:any;
  total:any;
  ngOnInit(): void {
    this.importService.getImportDetail(this.data.id).subscribe(data=>{
      this.data1=data;
      this.total=data[0].total;
    })
  }
  closeDialog()
  { 
    this.dialogR.closeDialog();
  
  }
}
