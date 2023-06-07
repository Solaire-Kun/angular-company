import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Mocks/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products!: any[];

  constructor(private router: Router) {
    this.products = Product;
  }

  ngOnInit(): void {

  }

  checkDetails(product: any) {
    this.router.navigate(['/products', product.id]);
  }
}
