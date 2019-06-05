import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter-seeker',
  templateUrl: './filter-seeker.component.html',
  styleUrls: ['./filter-seeker.component.css']
})
export class FilterSeekerComponent implements OnInit{
  private sub: any;
  path = '';
  idParam: number;
  textParam: string;
  products: any;
  showProducts: any[];
  firstShowProducts: any[];
  sortDescPrice = false;
  sortDescQuantity = false;
  sortDescAvailable = false;
  sortDescName = false;
  sortDescNameActive = false;
  sortDescPriceActive = false;
  sortDescQuantityActive = false;
  sortDescAvailableActive = false;
  checkAvailable = true;
  minPrice = 0;
  maxPrice: number;
  minStock = 0;
  maxStock: number;
  modalRef: BsModalRef;
  apiUrl = 'http://localhost:3000';

  constructor(private route: ActivatedRoute, private modalService: BsModalService, public http: HttpClient) { }

  ngOnInit() {
    const promise = this.getProducts();
    promise.then(data => {
      this.products = data;
      this.showProducts = this.products.filter(this.checkId.bind(this));
      this.firstShowProducts = this.showProducts;
    });

    this.sub = this.route.params.subscribe(params => {
      this.idParam = params['id'].trim();
      if (params['text']){
        this.textParam = params['text'].trim();
      }
      });
    this.getPath(this.idParam);
  }

  getProducts() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl + '/products').subscribe(data => {
      resolve(data);
    },
      err => {
        console.log(err);
        });
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getPath(value){
    switch (parseInt(value)) {
      case 1:
        this.path = 'Bebidas - Gaseosas';
        break;
      case 2:
        this.path = 'Bebidas - Gaseosas - Con azúcar';
        break;
      case 3:
        this.path = 'Bebidas - Gaseosas - Sin azúcar';
        break;
      case 4:
        this.path = 'Desayunos - Fake 1';
        break;
      case 5:
        this.path = 'Desayunos - Fake 1 - Fake 2';
        break;
      case 6:
        this.path = 'Desayunos - Fake 1 - Fake 3';
        break;
      case 7:
        this.path = 'Desayunos - Fake 1 - Fake 3 - Fake 4';
        break;
      case 8:
        this.path = 'Almuerzos - New Fake 8.1';
        break;
      case 9:
        this.path = 'Almuerzos - Fake 5';
        break;
      case 10:
        this.path = 'Almuerzos - Fake 6';
        break;
      case 11:
        this.path = 'Vinos - New Fake 11.1';
        break;
      case 12:
        this.path = 'Vinos - Fake 8';
        break;
      case 13:
        this.path = 'Vinos - Fake 9';
        break;
    }
  }

  checkId(elem) {
    if (this.textParam){
      return elem.sublevel_id == this.idParam && elem.name.includes(this.textParam);
    } else {
      return elem.sublevel_id == this.idParam;
    }
  }

  showArrow(value: number){
    this.sortDescNameActive = false;
    this.sortDescPriceActive = false;
    this.sortDescQuantityActive = false;
    this.sortDescAvailableActive = false;
    switch (value) {
      case 1:
        this.sortDescNameActive = true;
        break;
      case 2:
        this.sortDescPriceActive = true;
        break;
      case 3:
        this.sortDescQuantityActive = true;
        break;
      case 4:
        this.sortDescAvailableActive = true;
        break;
    }
  }

  applyFilters(): any{
    // this.firstShowProducts mantain values on init
    this.showProducts = this.firstShowProducts.filter(this.checkFilters.bind(this));
  }

  checkFilters(elem): any {
    if (this.minPrice && this.minPrice > this.priceToNumber(elem.price)){
      return false;
    } else if (this.maxPrice && this.maxPrice < this.priceToNumber(elem.price)){
      return false;
    } else if (this.minStock && this.minStock > elem.quantity){
      return false;
    } else if (this.maxStock && this.maxStock < elem.quantity){
      return false;
    } else if (!this.checkAvailable == elem.available){
      return false;
    } else {
      return true;
    }
  }

  priceToNumber(value){
    let resp = value.replace('$', '');
    resp = resp.replace(',', '');
    return parseInt(resp);
  }

  sortPrice(): any {
    if (!this.sortDescPrice){
      this.showProducts.sort((a, b) => (this.priceToNumber(a.price) > this.priceToNumber(b.price)) ? 1 : -1);
    } else {
      this.showProducts.sort((a, b) => (this.priceToNumber(a.price) < this.priceToNumber(b.price)) ? 1 : -1);
    }
    this.sortDescPrice = !this.sortDescPrice;
    this.showArrow(2);
  }

  sortQuantity(): any {
    if (!this.sortDescQuantity){
      this.showProducts.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1);
    } else {
      this.showProducts.sort((a, b) => (a.quantity < b.quantity) ? 1 : -1);
    }
    this.sortDescQuantity = !this.sortDescQuantity;
    this.showArrow(3);
  }

  sortAvailable(): any {
    if (!this.sortDescAvailable){
      this.showProducts.sort((a, b) => (a.available > b.available) ? 1 : -1);
    } else {
      this.showProducts.sort((a, b) => (a.available < b.available) ? 1 : -1);
    }
    this.sortDescAvailable = !this.sortDescAvailable;
    this.showArrow(4);
  }

  sortName(): any {
    if (!this.sortDescName){
      this.showProducts.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else {
      this.showProducts.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
    this.sortDescName = !this.sortDescName;
    this.showArrow(1);
  }

  addToCart(item) {
    let purchases = window.localStorage.getItem('purchases');
    if (!purchases){
      window.localStorage.setItem('purchases', '1');
      purchases = '1';
    } else {
      purchases = (parseInt(purchases) + 1).toString();
      window.localStorage.setItem('purchases', purchases);
    }
    window.localStorage.setItem('purchaseNumber' + purchases, JSON.stringify(item));
  }
}
