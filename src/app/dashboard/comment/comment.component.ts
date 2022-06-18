import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private commentService:CommentService) { }
  comment:any;
  ngOnInit(): void {
  this.fetchPosts();
  }

  deleteComment(id:number)
  {
    this.commentService.removeComment(id).subscribe(data=>{
      location.reload();
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.commentService.getAllComment().subscribe(
      data => {
        this.POSTS = data;
        console.log(data);

   
      }
      
    );
  }
}
