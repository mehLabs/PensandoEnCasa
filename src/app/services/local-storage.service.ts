import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  readKey(key:string):any{
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  addToKey(key:string,value:any){
    let newValue:null |string[] = [];
    if (localStorage.getItem(key) !== null){
      newValue = JSON.parse(localStorage.getItem(key) || '[]');
    }
    newValue?.push(value);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  createKey(key:string){
    localStorage.setItem(key,"[]");
  }

  removeFromKey(key:string,rElement:any){ //rElement for removeElement
    let storageProducts = JSON.parse(localStorage.getItem(key) || '[]');
    let products = storageProducts.filter((element:any) => element.id_article !== rElement.id_article );
    localStorage.setItem('products', JSON.stringify(products));
  }
}
