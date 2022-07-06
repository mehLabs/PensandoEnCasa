import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Producto } from '../interfaces/producto';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searched:any = [];

  constructor(private route:Router, private store:StoreService) { }

  search(text:string){
    this.searched.splice(0,this.searched.length);
    this.store.obtenerDatos().subscribe((articles:Producto[]) => {
      for (let article of articles){
        let lowCase:string = this.normalizar(article.nombre);
        if (lowCase.includes( this.normalizar(text) )){
          this.searched.push(article);
        }
      }
      this.route.navigate(["/search"], {
        queryParams: {
          buscando: text
        }
      });
    })
  }

  getSearched(){
    if (this.searched.length === 0){
      this.route.navigate(["/store"]);
    }
    return this.searched;
  }

  normalizar(texto:string){
    let str = texto.toLocaleLowerCase();
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
}

