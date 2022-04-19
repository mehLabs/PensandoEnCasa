import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

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

   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(
    'https://infinite-refuge-54136.herokuapp.com/api/articulos');
  }

  nuevoProducto(product: Producto):Observable<boolean>{
    let verdad:boolean = false;
    return this.http.post<any>('https://infinite-refuge-54136.herokuapp.com/api/articulos/add', product);
  }
}
