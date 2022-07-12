import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../../dialog.service';
import { ImportService } from '../import.service';

@Component({
  selector: 'app-import-cre',
  templateUrl: './import-cre.component.html',
  styleUrls: ['./import-cre.component.scss']
})
export class ImportCreComponent implements OnInit {

  constructor(private dialog:DialogService,
              private importService:ImportService,
              private router:Router) { }
  item:any;
  invoice:any;
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
        this.router.navigate(['/admin/import']);
        
      }
    })
  }
  clear()
  {
    if(window.confirm('Làm mới hoá đơn ?'))
    {
      this.importService.clearImportItem().subscribe(res=>{
        if(res==200)
        {
          this.importService.getImportItem().subscribe(data=>{
            this.item=data;
          })
        }
      });
      
    }
  }
  remove(id:number)
  {
    
    this.importService.removeImportItem(id).subscribe(data=>{
      if(data.status==200)
      {
        this.importService.getImportItem().subscribe(data=>{
          this.item=data;
        })
      }
    })
  }
}
