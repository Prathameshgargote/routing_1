import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBAr:MatSnackBar
  ) { }


  opensnackbar(msg:string){
    this._snackBAr.open(msg,'close',{
      verticalPosition:'top',
      horizontalPosition:'left',
      duration:3000
    })

  }
}
