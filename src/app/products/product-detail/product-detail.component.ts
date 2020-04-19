import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { flatMap, find, first } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

    ngOnInit(): void {
      const id = + this.activatedRoute.snapshot.params['id'];
  
      this
        .productService
        .products$
        .pipe(
          flatMap(p => p),
          first(product => product.id === id)
        )
        .subscribe(
          product => this.product = product
        )
    }

}
