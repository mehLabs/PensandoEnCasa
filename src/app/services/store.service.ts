import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, throwError } from 'rxjs';
import {environment as env} from '../../environments/environment';
import {Producto} from 'src/app/interfaces/producto';
import { Categoria } from '../interfaces/categoria';
import { Promo } from '../interfaces/promo';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  protected data:BehaviorSubject<any> = new BehaviorSubject<any>(0);
  protected ofertas:BehaviorSubject<any> = new BehaviorSubject<any>([]);
  protected loaded:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected categorias:BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http:HttpClient) {
    this.http.get<any>(
      `${env.dev.serverUrl}/api/public/articulos`).subscribe(dataServer => {
        this.data.next(dataServer);
        this.loaded.next(true);
      });
      
      
    this.http.get<any>(
      `${env.dev.serverUrl}/api/public/promos`).subscribe(promos => {
        console.log(promos)
        this.ofertas.next(promos);
        this.loaded.next(true);
      });

    this.http.get<any>(`${env.dev.serverUrl}/api/public/categoria/`).subscribe( categorias => {
      this.categorias.next(categorias);
      this.loaded.next(true);
    });
   }

  obtenerDatos():Observable<any>{
      return this.data;
  }

  isLoaded(){
    return this.loaded.asObservable();
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
    return this.categorias.asObservable();
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

    return this.ofertas.asObservable();
  }

  getOferta(id:number | string):Observable<any>{
    return this.http.get<any>(
      `${env.dev.serverUrl}/api/public/promos/`+id
    )
  }

  deleteOferta(id:number | string):Observable<any>{
    return this.http.delete<boolean>(
      `${env.dev.serverUrl}/api/protected/promos/del/`+id
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
