import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/dashboard/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private aboutService:AboutService) { }
  about:any;
  ngOnInit(): void {

    this.aboutService.getAllAbount().subscribe(data=>{
      this.about=data[0];
    })
  }

}
