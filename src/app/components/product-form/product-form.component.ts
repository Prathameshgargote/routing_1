import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  prodID!: string
  productForm!: FormGroup
  isEditMode: boolean = false
  prodObj!: Iproduct
  constructor(
    private _activeRoute: ActivatedRoute,
    private _productServoice: ProductService,
    private _router: Router,
    private _uuid:UuidService,
    private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      pname: new FormControl(null, Validators.required),
      pstatus: new FormControl(null, Validators.required),
      canReturn: new FormControl(null, Validators.required)
    })
    this, this.prodID = this._activeRoute.snapshot.params['id']
    if (this.prodID) {
      this.isEditMode = true
      this.prodObj = this._productServoice.getsingleProduct(this.prodID)
      let canreturnVal = this.prodObj.canReturn ? 'yes' : 'no'
      this.productForm.patchValue({ ...this.prodObj, canReturn: canreturnVal ,})
    }
  }

  onsubmit() {
   if(this.productForm.valid){
    let obj=this.productForm.value
    let val=obj.canReturn==='yes'?1:0
    let newprod={...this.productForm.value,pid:this._uuid.generatoUuid(),canReturn:val}
    console.log(newprod);
    this._productServoice.Addproduct(newprod)
    this._router.navigate(['product'])
    this._snackBar.opensnackbar('the product is Added  Successfully !!!')  

   }
  }
  onupdate() {
   if(this.productForm.valid){
    let canRval = this.productForm.value === 'yes' ? 1 : 0;
    let updateoBJ = { ...this.productForm.value, canReturn: canRval,pid:this.prodID}
    console.log(updateoBJ);
    this._productServoice.updateProduct(updateoBJ)
    this._router.navigate(['product'])
    this._snackBar.opensnackbar('the product is update  Successfully !!!')
   }
  }

}
