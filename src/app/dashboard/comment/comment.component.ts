import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  searchForm=new FormGroup({
    txt: new FormControl('')
  });
  constructor(private commentService:CommentService,private router:Router) { }
  comment:any;
  ngOnInit(): void {
  this.fetchPosts();
  }

  deleteComment(id:number)
  {
    if(window.confirm('Bạn có muốn xoá bình luận này ?'))
    {
      this.commentService.removeComment(id).subscribe(data=>{
        if(data.status==200)
        {
          alert('Đã xoá bình luận')
          location.reload();
        }
        
      });
    }
    
  }
  onSubmit(form:FormGroup)
  {
    this.commentService.search(form.value.txt).subscribe(res=>{
      this.POSTS=res;
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

  goToComment(id:number)
  {
    this.router.navigate(['/product-detail',id]).then(()=>{
        location.reload();
        document.getElementById('comment')?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
    });
  }
}
