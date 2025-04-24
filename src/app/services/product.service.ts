import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsArr: Array<Iproduct> = [
    {
      pname: 'Samsung M31',
      pid: "123",
      pstatus: "In-progress",
      canReturn: 1
    },
    {
      pname: 'Samsung TV',
      pid: "124",
      pstatus: "Dispatched",
      canReturn: 1
    },
    {
      pname: 'Iphone',
      pid: "125",
      pstatus: "Delivered",
      canReturn: 0
    }
  ]
  constructor() { }

  fetchAllproduct() {
    return this.productsArr
  }

  getsingleProduct(id: string) {
    return this.productsArr.find(prod => prod.pid === id)!
  }

  updateProduct(updatPro: Iproduct) {
    let getindex = this.productsArr.findIndex(prod => prod.pid === updatPro.pid)
    this.productsArr[getindex] = updatPro
  }
  Addproduct(prod: Iproduct) {
    return this.productsArr.push(prod)
  }
  removeproduct(prod: Iproduct) {
    let getindx = this.productsArr.findIndex(p => p.pid === prod.pid)
    this.productsArr.splice(getindx, 1)
  }
}
