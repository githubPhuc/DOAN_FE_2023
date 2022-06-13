import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/dashboard/comment/comment.service';
import { DialogService } from 'src/app/dashboard/dialog.service';
import { ProductService } from 'src/app/dashboard/product/product.service';

@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.scss']
})
export class DetailProComponent implements OnInit {

  id!: number;
  private sub: any;

  product:any;
  comment:any;
  constructor(private proservice:ProductService,private route: ActivatedRoute,private dialog:DialogService,private commentService:CommentService) { }
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.proservice.getProduct(this.id).subscribe(data=>{
        console.log("xxxxxxxxxxxxxxxxxxxxxxx");
        this.product=data;
        console.log(data);
      })


   });
   this.commentService.getAllCommentInProduct(this.id).subscribe(data=>{
    this.comment=data;
   });
   
  }

  openAddComment(id:number)
  {

    this.dialog.openDialogAddComment(id);
  }

  openRepComment(cmt:number)
  {
    alert(cmt);
    this.dialog.openDialogRepComment(this.id,cmt);
  }
}
