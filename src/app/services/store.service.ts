import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Nullable<T> = T | null;
interface Producto{
  name: string;
  usado: boolean;
  precio: number;
  id_product: Nullable<number>;
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

  nuevoProducto(product: Producto):Observable<Producto>{
    return this.http.post<Producto>('https://infinite-refuge-54136.herokuapp.com/api/articulos/add', product);
  }
}
