import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';

@Injectable()
export class ProductService {
    private url = "http://localhost:8080/products";

    constructor(private httpClient: HttpClient) {}

    getProducts(searchTerm: string) : Observable<Product[]> {
        if (!searchTerm.trim()) {
            return this.httpClient.get<Product[]>(this.url);
        }
        
        return this.httpClient.get<Product[]>('${this.url}?${searchTerm}');
    }
}