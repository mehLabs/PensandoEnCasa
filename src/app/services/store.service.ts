import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

type Nullable<T> = T | null;
interface Producto{
  nombre: string;
  usado: boolean;
  precio: number;
  id_article: Nullable<number>;
  id_categoria: Nullable<number>;
  descripcion: string;
  cantidad: number;
  img1: Nullable<string>;
  img2: Nullable<string>;
  img3: Nullable<string>;
  }

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(private http:HttpClient) {

   }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(
    'https://infinite-refuge-54136.herokuapp.com/api/articulos');
  }

  nuevoProducto(product: Producto):Observable<number>{
    return this.http.post<any>('https://infinite-refuge-54136.herokuapp.com/api/articulos/add', product);
  }

  obtenerArticulo(id:any):Observable<any>{
    return this.http.get<any>(
      'https://infinite-refuge-54136.herokuapp.com/api/articulos/'+id+'/'
    );
  }

  obtenerCategoria(id:any):Observable<any>{
    return this.http.get<any>(
      'https://infinite-refuge-54136.herokuapp.com/api/categoria/'+id
    )
  }

  eliminarProducto(producto:any):Observable<boolean>{
    return this.http.delete<any>(
      'https://infinite-refuge-54136.herokuapp.com/api/articulos/del/'+producto.id_article
    )
  }

  
}
