import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent implements OnInit {
userArr!:Array<Iuser>
  constructor(
    private _userservice:UserService
  ) { }

  ngOnInit(): void {
    this.userArr=this._userservice.fetchAlluser()
  }

}
