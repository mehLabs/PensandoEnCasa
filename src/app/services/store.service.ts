import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {environment as env} from '../../environments/environment';
import {Producto} from 'src/app/interfaces/producto';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(private http:HttpClient) {

   }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(
    `${env.dev.serverUrl}/api/public/articulos`);
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

  
}
