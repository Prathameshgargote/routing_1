import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodcutId!: string
  productInfo!: Iproduct
  constructor(
    private _activetroute: ActivatedRoute,
    private _productService: ProductService,
    private _matdailog: MatDialog,
    private _router: Router,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.prodcutId = this._activetroute.snapshot.params['id']
    this.productInfo = this._productService.getsingleProduct(this.prodcutId)
    console.log(this.productInfo);

  }
  onremove() {
    let matConfirmConfig = new MatDialogConfig()
    matConfirmConfig.width = '400px'
    matConfirmConfig.disableClose = true
    matConfirmConfig.data = ` are you sure you want to remove`
    let matdailogRef = this._matdailog.open(GetconfirmComponent, matConfirmConfig)
    matdailogRef.afterClosed()
      .subscribe(res => {
       if(res){
        this._productService.removeproduct(this.productInfo)
        this._router.navigate(['product'])
        this._snackbar.opensnackbar('the product is remove Successfully !!!')
       }
      })
  }

}
