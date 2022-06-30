import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-cre',
  templateUrl: './about-cre.component.html',
  styleUrls: ['./about-cre.component.scss']
})
export class AboutCreComponent implements OnInit {

  aboutForm=new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  data={
    title: '',
    content:''
  }
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
  }

  onSubmit(form:FormGroup)
  {
    this.data.title=form.value.title;
    this.data.content=form.value.content;
    this.aboutService.postAbount(this.data).subscribe(data=>{
      if(data.status==200)
      {
        alert(data.msg);
      }
    })
    
  }

}
