import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Producto } from '../interfaces/producto';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

  items: Producto[] = [];
  cant: number = 0;
  quant: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private lStorage:LocalStorageService){
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
    
    this.addQuant();
    
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
      product.cantidad = this.items[iter].cantidad +1; //El item producto almacena la cantidad que se va a comprar
      cant = product.cantidad;
      this.removeItem(product);
    }else{
      product.cantidad = 1;
    }
    this.lStorage.addToKey("products",product);
    this.items.push(product);
    return cant;
  }

  addQuant(){
    this.cant += 1;
    this.quant.next(this.cant);
  }
  minusQuant(){
    this.cant -= 1;
    this.quant.next(this.cant);
    console.log("cant:"+this.cant);
  }

  getQuantity(){
    let items = this.getItems();
    let cant = 0;
    for (let item of items){
      cant += item.cantidad;
    }
    this.cant = cant;
    this.quant.next(this.cant);

    return this.quant.asObservable();
  }

  minusItem(product:Producto):boolean{
    this.minusQuant();
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
    for (let i=0; i<product.cantidad;i++){
      this.minusItem;
    }
    this.items = this.items.filter(item => item.id_article !== product.id_article);
    this.lStorage.removeFromKey("products",product);
  }

  clearCart(){ //TODO borrar todo en local storage
    this.items = [];
    return this.items;
  }

}
