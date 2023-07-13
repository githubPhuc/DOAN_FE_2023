import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  about:number=0;
  ab:any;
  dataAb:any
  ngOnInit(): void {

 
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
