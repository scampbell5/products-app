import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { LOCATION_INITIALIZED } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title = 'app';
  products$: Observable<Product[]>;
  searchTerm: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  search(searchTerm: string) {
    console.log(this.searchTerm);
    this.products$ = this.productService.getProducts(searchTerm);
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}