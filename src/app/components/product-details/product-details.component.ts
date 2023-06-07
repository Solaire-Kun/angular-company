import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Mocks/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId?: any;
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')
    console.log(this.productId)
    Product.forEach(product => {
      if (product.id == this.productId) {
        this.product = product
      }
    })
  }
}