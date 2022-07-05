import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  POSTS:any;
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {

    this.aboutService.getAllAbount().subscribe(data=>{
      this.POSTS=data;
    })
  }

  delete(id:number)
  {
    if(window.confirm('Bạn có muốn xoá ?'))
    {

   
    this.aboutService.deleteAbount(id).subscribe(res=>{
      if(res.status==200)
      {
        alert('Xoá thành công')
        location.reload();
      }
    });
  }
  }

}
