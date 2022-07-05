import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/dashboard/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private aboutService:AboutService) { }
  about:number=0;
  ab:any;
  dataAb:any
  ngOnInit(): void {

    this.aboutService.getAllAbount().subscribe(data=>{
      this.dataAb=data[this.about];
      this.ab=data;
      
    })
  }
  next()
  {
    if(this.ab[this.about+1]==null)
    {
      return;
    }
    this.about++;
    this.dataAb=this.ab[this.about];
  }
  prev()
  {
    if(this.about<=0)
    {
      return;
    }
    this.about--;
    this.dataAb=this.ab[this.about];
    
  }
}
