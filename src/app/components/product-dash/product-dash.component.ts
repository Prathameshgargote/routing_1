import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent implements OnInit {
 ProductArr!:Array<Iproduct>
  constructor(
    private _productService:ProductService
  ) { }

  ngOnInit(): void {
    this.ProductArr=this._productService.fetchAllproduct()
  }

}
