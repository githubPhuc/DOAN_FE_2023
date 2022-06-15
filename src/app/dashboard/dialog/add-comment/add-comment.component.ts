import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from '../../comment/comment.service';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

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
      star: form.value.star,
      productId: this.data.id,
      replyId:0
    }
    this.commentService.addComment(this.data1).subscribe(res=>{
      if(res.status==200)
      {
        this.dialog.closeDialog();
        alert(res.msg);

      }
      
    });
    console.log('data',this.data1);
  }

  cancel()
  {
    this.dialog.closeDialog();
  }
}
