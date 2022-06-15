import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from '../../comment/comment.service';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-rep-comment',
  templateUrl: './rep-comment.component.html',
  styleUrls: ['./rep-comment.component.scss']
})
export class RepCommentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private commentService:CommentService,private dialog:DialogService) { }

  commentForm = new FormGroup({
    content: new FormControl(''),
    star: new FormControl(''),


  });

  data1:any;

  ngOnInit(): void {
  }

  onSubmit(form:FormGroup)
  {
    this.data1={
      userId: localStorage.getItem('userid'),
      content: form.value.content,
      star: 5,
      productId: this.data.id,
      replyId:this.data.cmt
    }

    console.log('rep',this.data1);
    this.commentService.addComment(this.data1).subscribe(res=>{
      if(res.status==200)
      {
        this.dialog.closeDialog();
       

      }
      
    });
    console.log('data',this.data1);
  }
  cancel()
  {
    this.dialog.closeDialog();
  }
}
