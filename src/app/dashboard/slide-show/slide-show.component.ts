import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  POSTS:any;
  searchForm=new FormGroup({
    txt: new FormControl('')
  })
  constructor(private http:HttpClient,private dialog:DialogService) { }

  loadSlide()
  {
    return this.http.get<any>('https://localhost:7043/api/slideshow/getslideshow');
  }
  ngOnInit(): void {
    this.loadSlide().subscribe(data=>{
      this.POSTS=data;
    })
  }
  onSubmit(form:FormGroup)
  {

  }

  create()
  {
    this.dialog.openDialogCreateSlide();
  }
}
