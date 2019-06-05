import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppServices {

  constructor(private http: HttpClient) {}

  getJSONcategories(): Observable<any> {
    return this.http.get('./../assets/categories-new.json');
  }
  getJSONproducts(): Observable<any> {
    return this.http.get('./../assets/products.json');
  }
  updateProducts(products: any): Observable<any> {
    return this.http.put('./../assets/products.json', products);
  }
}
