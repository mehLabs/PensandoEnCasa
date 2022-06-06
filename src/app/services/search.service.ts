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
    console.log(text);
    this.store.obtenerDatos().subscribe((articles:Producto[]) => {
      for (let article of articles){
        let lowCase:string = article.nombre.toLocaleLowerCase();
        if (lowCase.includes(text.toLocaleLowerCase())){
          this.searched.push(article);
        }
      }
      console.log(this.searched);
      this.route.navigate(["/search"]);
    })
  }

  getSearched(){
    if (this.searched.length === 0){
      this.route.navigate(["/store"]);
    }
    return this.searched;
  }
}
