import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  obtenerDatos(){
    console.log("StoreService is functionating");
  }
}
