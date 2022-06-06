import { Injectable, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { CookiesService } from './cookies.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

  items: Producto[] = [];

  constructor(private lStorage:LocalStorageService){
    console.log(lStorage.readKey("products"));
    if (lStorage.readKey("products").length > 0){
      this.items = lStorage.readKey("products");
    }else{
      lStorage.createKey("products"); 
      this.items = lStorage.readKey("products");  
    }
  }

  ngOnInit(): void {
  }

  addToCart(product:Producto):number{
    let includes = false;
    let iter:number = -1;
    let cant:number = 1;
    for (let i=0;i<this.items.length;i++){
      if (product.id_article === this.items[i].id_article){
        includes=true;
        iter = i;
        break;
      }
    }
    if (includes){
      console.log(iter);
      product.cantidad = this.items[iter].cantidad +1;
      cant = product.cantidad;
      this.removeItem(product);
    }else{
      product.cantidad = 1;
    }
    this.lStorage.addToKey("products",product);
    this.items.push(product);
    return cant;
  }

  minusItem(product:Producto):boolean{
    let iter:number = -1;
    for (let i=0;i<this.items.length;i++){
      if (product.id_article === this.items[i].id_article){
        iter = i;
        break;
      }
    }
    if( this.items[iter].cantidad > 0){

      product.cantidad = this.items[iter].cantidad - 1;
      this.removeItem(product);
      this.lStorage.addToKey("products",product);
      this.items.push(product);
    }
    if (this.items[iter].cantidad === 0){
        return false;
      }
    return true;
    
  }

  getItems(){
    return this.items;
  }

  removeItem(product:Producto){
    this.items = this.items.filter(item => item.id_article !== product.id_article);
    this.lStorage.removeFromKey("products",product);
  }

  clearCart(){ //TODO borrar todo en local storage
    this.items = [];
    return this.items;
  }

}
