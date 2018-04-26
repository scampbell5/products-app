import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';
import { environment } from '../environments/environment';
@Injectable()
export class ProductService {
    private url = environment.api.product.baseUrl + "/products";

    constructor(private httpClient: HttpClient) {}

    getProducts(searchTerm?: string) : Observable<Product[]> {
        if (searchTerm == null || !searchTerm.trim()) {
            return this.httpClient.get<Product[]>(this.url);
        }
        
        return this.httpClient.get<Product[]>(`${this.url}/?searchTerm=${searchTerm.trim()}`);
    }
}