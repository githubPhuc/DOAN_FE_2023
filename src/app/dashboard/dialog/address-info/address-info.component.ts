import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit {

  adForm = new FormGroup({
    name: new FormControl(''),


  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:FormGroup)
  {
    
  }
}
