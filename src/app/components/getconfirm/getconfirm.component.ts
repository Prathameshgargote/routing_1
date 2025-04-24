import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss']
})
export class GetconfirmComponent implements OnInit {
msg!:string
  constructor(
    private _matdailg:MatDialogRef<GetconfirmComponent>,
   @Inject(MAT_DIALOG_DATA) getmas:string
  ) { 
    this.msg=getmas
  }

  ngOnInit(): void {
  }

onremove(flag:boolean){
this._matdailg.close(flag)
}
}
