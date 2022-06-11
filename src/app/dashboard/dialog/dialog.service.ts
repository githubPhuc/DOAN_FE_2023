import { Injectable } from '@angular/core';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {


  constructor(private dialog:MatDialog) { }


}
