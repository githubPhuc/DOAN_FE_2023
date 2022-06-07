import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-pro-create',
  templateUrl: './pro-create.component.html',
  styleUrls: ['./pro-create.component.scss']
})
export class ProCreateComponent implements OnInit {

  constructor(private responseCate:CategoryService) { }

  category:any;
  ngOnInit(): void {

    this.responseCate.getAllCategory().subscribe(data=>{
      this.category=data;
    })
  }

}
