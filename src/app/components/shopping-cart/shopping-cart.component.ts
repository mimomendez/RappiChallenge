import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  showPurchases: any[] = [];
  finalPrice = 0;
  modalRef: BsModalRef;
  indexToRemove = 0;
  idToRemove = '';
  apiUrl = 'http://localhost:3000';

  constructor(private modalService: BsModalService, public http: HttpClient) { }

  ngOnInit() {
    const purchases = window.localStorage.getItem('purchases');
    let totalElements = 0;
    if (!purchases){
      this.showPurchases = [];
    } else {
      totalElements = parseInt(purchases);
      for (let i = 1; i <= totalElements; i++){
        this.loadPurchases(i);
      }
      this.updatePrice();
    }
  }

  loadPurchases(index: number) {
    let purchaseToAdd = {};
    if (window.localStorage.getItem('purchaseNumber' + index) !== 'deleted') {
      const temp = JSON.parse(window.localStorage.getItem('purchaseNumber' + index));
      const exist = this.showPurchases.findIndex( elem => {
        return temp && elem.id === temp.id;
       });
      if (temp){
        purchaseToAdd = {
          id: temp.id,
          name: temp.name,
          price: temp.price,
          quantity: 1,
          stock: temp.quantity
        };
        if (exist != -1){
          this.showPurchases[exist].quantity = this.showPurchases[exist].quantity + 1;
        } else {
          this.showPurchases.push(purchaseToAdd);
        }
      }
    }
  }

  priceToNumber(value){
    let resp = value.replace('$', '');
    resp = resp.replace(',', '');
    return parseInt(resp);
  }

  updatePrice(){
    let tempPrice = 0;
    for (let i = 0; i < this.showPurchases.length; i++){
      tempPrice += this.priceToNumber(this.showPurchases[i].price) * this.showPurchases[i].quantity;
    }
    this.finalPrice = tempPrice;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  openModalProduct(template: TemplateRef<any>, i: number, id: string) {
    this.indexToRemove = i;
    this.idToRemove = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  setProduct(product: any) {
    return new Promise(resolve => {
    this.http.put(this.apiUrl + '/products/' + product.id,
    {
      quantity: (product.stock - product.quantity),
      price: product.price,
      available: product.available,
      sublevel_id: product.sublevel_id,
      name: product.name,
    }).subscribe(data => {
      resolve(data);
    },
      err => {
        console.log(err);
        });
      });
  }

  confirm(): void {
    // update products info in db.json
    for (let i = 0; i < this.showPurchases.length; i++) {
      const promise = this.setProduct(this.showPurchases[i]);
      promise.then(data => {
        console.log(data);
      });
    }

    this.showPurchases.length = 0;
    window.localStorage.clear();
    this.finalPrice = 0;
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  confirmProduct(): void {
    this.showPurchases.splice(this.indexToRemove, 1);
    this.removeItemsFromStorage();
    this.updatePrice();
    this.modalRef.hide();
  }

  removeItemsFromStorage(){
    const purchases = window.localStorage.getItem('purchases');
    let totalElements = 0;
    if (!purchases){
      this.showPurchases = [];
    } else {
      totalElements = parseInt(purchases);
      for (let i = 1; i <= totalElements; i++){
        this.removePurchase(i);
      }
    }
  }

  removePurchase(index: number){
    if (window.localStorage.getItem('purchaseNumber' + index) !== 'deleted') {
      const temp = JSON.parse(window.localStorage.getItem('purchaseNumber' + index));
      if (temp && this.idToRemove === temp.id){
        window.localStorage.setItem('purchaseNumber' + index, 'deleted');
      }
    }
  }

  declineProduct(): void {
    this.modalRef.hide();
  }
}
