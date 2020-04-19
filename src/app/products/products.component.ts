import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.interface';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  errorMessage: string;
  selectedProduct: Product;

    // Pagination
    pageSize = 5;
    start = 0;
    end = this.pageSize;
    currentPage = 1;
  
    previousPage() {
      this.start -= this.pageSize;
      this.end -= this.pageSize;
      this.currentPage--;
      this.selectedProduct = null;
    }
    nextPage() {
      this.start += this.pageSize;
      this.end += this.pageSize;
      this.currentPage++;
      this.selectedProduct = null;
    }

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this
    .productService
    .products$
    .pipe(
      catchError(
        error => {
          this.errorMessage = error;
          return EMPTY;
        }
      )
    );
  }

}
