import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  removeItems(product){
    this.items = this.items.filter(this.item => item != product);
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

}
