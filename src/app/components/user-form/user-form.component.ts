import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iuser } from 'src/app/model/user';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup
  IseditMode: boolean = false
  userId!: string
  userObj!: Iuser

  constructor(
    private _activeroute: ActivatedRoute,
    private _userservice: UserService,
    private router: Router,
    private _uuid: UuidService,
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createform()
    this.userId = this._activeroute.snapshot.params['id']
    if (this.userId) {
      this.IseditMode = true
      this.userObj = this._userservice.getsingleuser(this.userId)
      this.userForm.patchValue(this.userObj)
    }
  }

  createform() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
    })
  }

  onsubmit() {
    if (this.userForm.valid) {
      let newobj = { ...this.userForm.value, userId: this._uuid.generatoUuid() }
      console.log(newobj);
      this._userservice.adduser(newobj)
      this.router.navigate(['user'])
      this._snackBar.opensnackbar(` the user ${newobj.userName} Added Successfully`)
    }
  }


  onupdate() {
    if (this.userForm.valid) {
      let updateobj = { ...this.userForm.value, userId: this.userId }
      this._userservice.updateuser(updateobj)
      this.router.navigate(['user'])
      this._snackBar.opensnackbar(` the user ${updateobj.userName} Update Successfully`)
    }
  }


}
