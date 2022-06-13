import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.scss']
})
export class ProDetailComponent implements OnInit {
  id!: number;
  private sub: any;

  product:any;
  constructor(private proservice:ProductService,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
  
      this.proservice.getProduct(this.id).subscribe(data=>{
        console.log("xxxxxxxxxxxxxxxxxxxxxxx");
        this.product=data;
        console.log(data);
      })


   });
  }

}
