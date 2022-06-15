import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private commentService:CommentService) { }
  comment:any;
  ngOnInit(): void {
    this.commentService.getAllComment().subscribe(data=>{
    this.comment=data;
    });
  }

  deleteComment(id:number)
  {
    this.commentService.removeComment(id).subscribe(data=>{
      location.reload();
    })
  }

}
