import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import {environment as env} from '../../environments/environment';
import {Producto} from 'src/app/interfaces/producto';
import { Categoria } from '../interfaces/categoria';
import { Promo } from '../interfaces/promo';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  data:any;

  constructor(private http:HttpClient) {
    this.http.get<any>(
      `${env.dev.serverUrl}/api/public/articulos`).subscribe(dataServer => this.data = dataServer);
   }

  obtenerDatos():Observable<any>{


    if (this.data !== null && this.data !== undefined){
      return new Observable((observer) => {
        observer.next(this.data);
        return {
          unsubscribe() {}
        };
      });
    }else{
      this.http.get<any>(
        `${env.dev.serverUrl}/api/public/articulos`).subscribe(datos => {
          this.data = datos;
        });
      return this.http.get<any>(
        `${env.dev.serverUrl}/api/public/articulos`);
    }
  }

  isReady(){
    return this.data !== null && this.data !== undefined;
  }
  
  getArticulosPorCat(cat:number){
    return this.http.get<any>(`${env.dev.serverUrl}/api/public/articulos/`+cat);
  }

  nuevoProducto(product: Producto):Observable<number>{
    return this.http.post<any>(`${env.dev.serverUrl}/api/articulos/add`, product);
  }

  obtenerArticulo(id:any):Observable<any>{
    return this.http.get<any>(
      `${env.dev.serverUrl}/api/public/articulos/`+id+'/'
    );
  }

  nuevaCategoria(nombre: Categoria):Observable<any>{
    return this.http.post<any>(`${env.dev.serverUrl}/api/categoria/add`,nombre)
  }
  obtenerCategoria(id:any):Observable<any>{
    return this.http.get<any>(
      `${env.dev.serverUrl}/api/public/categoria/`+id
    )
  }

  obtenerCategorias():Observable<any>{
    return this.http.get<any>(`${env.dev.serverUrl}/api/public/categoria/`);
  }

  eliminarProducto(producto:any):Observable<boolean>{
    return this.http.delete<any>(
      `${env.dev.serverUrl}/api/articulos/del/`+producto.id_article
    )
  }

  eliminarCategoria(categoria:any):Observable<boolean>{
    return this.http.delete<any>(
      `${env.dev.serverUrl}/api/categoria/del/`+categoria.id_categoria
    )
  }

  hardReset():Observable<boolean>{
    return this.http.delete<any>(
      `${env.dev.serverUrl}/api/admin/reset`
    )
  }

  getJWT():Observable<any>{
    return this.http.get<any>(
      `${env.dev.serverUrl}/api/protected/token`
    )
  }

  getOfertas():Observable<any>{
    return this.http.get<any>(
      `${env.dev.serverUrl}/api/public/promos`
    )
  }

  getOferta(id:number | string):Observable<any>{
    return this.http.get<any>(
      `${env.dev.serverUrl}/api/public/promos/`+id
    )
  }

  deleteOferta(id:number | string):Observable<any>{
    return this.http.delete<boolean>(
      `${env.dev.serverUrl}/api/protected/promos/del`+id
    )
  }

  modifyOferta(oferta: Promo):Observable<boolean>{
    return this.http.put<boolean>(
      `${env.dev.serverUrl}/api/protected/promos/mod`,oferta
    )
  }

  newOferta(oferta:Promo):Observable<boolean>{
    return this.http.post<boolean>(
      `${env.dev.serverUrl}/api/protected/promos/add`,oferta
    )
  }

  
}
