import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TrademarkService } from './trademark.service';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.scss']
})
export class TrademarkComponent implements OnInit {

  tradeMark:any;
  trademarkForm = new FormGroup({
    name: new FormControl(''),

  });
  searchForm = new FormGroup({
    name: new FormControl(''),

  });


  constructor(private tradeService:TrademarkService) { }

  ngOnInit(): void {
    this.tradeService.getAllTrademark().subscribe(data=>{
      this.tradeMark=data;
    })
  }

  onSubmit(form:FormGroup)
  {
    this.tradeService.PostTrademark(form.value.name).subscribe(data=>{
      if(data.status==200)
      {
        alert(data.msg);
        location.replace(location.href);
      }
    })
  }
  onSubmit1(form:FormGroup)
  {

  }

  edit(id:number)
  {

  }

  deleteTrademark(id:number)
  {
    this.tradeService.DeleteTrademark(id).subscribe(data=>{
      if(data.status==200)
      {
        alert(data.msg);
        location.reload();
      }
    })
  }
}
