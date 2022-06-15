import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../dialog.service';
import { ImportService } from '../import.service';

@Component({
  selector: 'app-import-cre',
  templateUrl: './import-cre.component.html',
  styleUrls: ['./import-cre.component.scss']
})
export class ImportCreComponent implements OnInit {

  constructor(private dialog:DialogService,
              private importService:ImportService) { }
  item:any;
  ngOnInit(): void {
    this.importService.getImportItem().subscribe(data=>{
      this.item=data;
    })
  }
  openAdd()
  {
    this.dialog.openDialogAddItem();
  }

  postImport()
  {
    this.importService.postImport().subscribe(data=>{
      if(data.status==200)
      {
        alert(data.msg);
        location.reload();
      }
    })
  }
}
