import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersArr: Array<Iuser> = [
    {
      userName: 'Jhon Doe',
      userId: '123',
      userRole: 'Candidate'
    },
    {
      userName: 'Jen Doe',
      userId: '124',
      userRole: 'Candidate'
    },
    {
      userName: 'May Doe',
      userId: '125',
      userRole: 'Admin'
    }
  ]
  constructor() { }

  fetchAlluser() {
    return this.usersArr
  }
  getsingleuser(id: string) {
    return this.usersArr.find(user => user.userId === id)!
  }
  updateuser(updateuser: Iuser) {
    let getindex = this.usersArr.findIndex(use => updateuser.userId === use.userId)
    this.usersArr[getindex] = updateuser
  }
  adduser(userobj: Iuser) {
    return this.usersArr.push(userobj)
  }
  removeuser(remove: Iuser) {
    let getindex = this.usersArr.findIndex(use => remove.userId === use.userId)
    this.usersArr.splice(getindex,1)
  }
}
