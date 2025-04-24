import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId!: string
  userInfo!: Iuser
  constructor(
    private _activeRouter: ActivatedRoute,
    private _userService: UserService,
    private _matdailog: MatDialog,
    private _routee: Router,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.userId = this._activeRouter.snapshot.params['id']
    console.log(this.userId);
    this.userInfo = this._userService.getsingleuser(this.userId)
    console.log(this.userInfo);

  }

  onremove() {
    let matdailogconfig = new MatDialogConfig()
    matdailogconfig.width = '400px'
    matdailogconfig.disableClose = true
    matdailogconfig.data = `Are  you Sure ! you want to remove ${this.userInfo.userName}`
    let matdailogRef = this._matdailog.open(GetconfirmComponent, matdailogconfig)
    matdailogRef.afterClosed()
      .subscribe(res => {
        if (res) {
          this._userService.removeuser(this.userInfo)
          this._routee.navigate(['user'])
          this._snackbar.opensnackbar(`the user ${this.userInfo.userName} Remove Successfully`)
        }
      })
  }

}
